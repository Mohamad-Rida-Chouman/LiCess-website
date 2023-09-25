<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Task;
use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Psr7;
use GuzzleHttp\Client;


class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'user_id' => 'required|numeric',
            'task_name' => 'required|string',
            'date' => 'required|date',
            'state' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $task = Task::create($request->all());
        return response()->json($task, 200);
    }

    public function show(Task $task)
    {
        return response()->json($task, 200);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $validator = Validator::make( $request->all(), [
            'state' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $task -> state = $request -> input('state');
        $task -> save();

        return response()->json($task, 200);
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json('',200);
    }

    public function getTasksByUserId()
    {
        $user_id = 1;
        $tasks = Task::where('user_id', $user_id)->orderBy('created_at', 'DESC')->get();
        return response()->json($tasks);
    }

    public function createPreprocessingTask(Request $request) {
        $user_id=1;

        $fastapath = $request -> fasta -> path();
        $sitesCsvPath = $request -> sitesCsv -> path();
        $windowSize = $request -> windowSize;

        $data = [
            'user_id' => $user_id,
            'task_name' => 'Data Preprocessing',
            'date' => Carbon::now()->format("Y-m-d H:i:s"), //date("Y-m-d"),
            'state' => 'Pending',
        ];
        $task = Task::create($data);
        $task_id = json_decode($task, true)['id'];

        $new_client = new \GuzzleHttp\Client();

        $response = $new_client->post( 'http://127.0.0.1:5000/dataset?windowSize='.$windowSize, [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . Session::get('SesTok'),
            ],
            'multipart' => [
                [
                    'name'     => 'fastaContent',
                    'filename' => 'fasta.fasta',
                    'contents' => fopen( $fastapath, 'r' ),
                ],
                [
                    'name'     => 'dataContent',
                    'filename' => 'data.csv',
                    'contents' => fopen( $sitesCsvPath, 'r' ),
                ],
            ]
        ]);

        if(json_decode($response ->getBody()->getContents(), true)['code'][0] == 500){
            $task -> state = 'Failed';
            $task -> save();

            return ($task);
        }
        else
        {
            $output = json_decode($response ->getBody(), true)['output'][0];
            
            $resultData = [
                'task_id' => $task_id,
                'data_type' => 'csv',
                'label' => 'w_'.$windowSize.'.csv',
                'data' => serialize($output)
            ];
            $result = Result::create($resultData);
            
            $task -> state = 'Completed';
            $task -> save();

            return ($task);
        }

    }

    public function createFeatureTask(Request $request) {
        $user_id=1;

        $fileContentpath = $request -> fileContent -> path();
        $windowSize = $request -> windowSize;
        $feature = $request -> feature;

        $data = [
            'user_id' => $user_id,
            'task_name' => 'Feature Extraction: '.strtoupper($feature),
            'date' => Carbon::now()->format("Y-m-d H:i:s"),
            'state' => 'Pending',
        ];
        $task = Task::create($data);
        $task_id = json_decode($task, true)['id'];

        $client = new Client();

        $promise = $client->postAsync('http://127.0.0.1:5000/'.$feature, [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . Session::get('SesTok'),
            ],
            'multipart' => [
                [
                    'name'     => 'fileContent',
                    'filename' => 'preprocessedData.csv',
                    'contents' => fopen( $fileContentpath, 'r' ),
                    // 'contents' => Psr7\Utils::tryFopen($fileContentpath, 'r' )
                ],
                [
                    'name'     => 'windowSize',
                    'contents' => $windowSize,
                ],
            ]
            ])->then(
                function ($response) {
                    $res = json_decode($response->getBody()->getContents(), true);
                    return($res);
                },
                function ($exception) {
                    $res = array('output' => $exception->getMessage(), 'code' => 500);
                    return($res);
                }
            );

        $response = $promise->wait();
        $code = $response["code"];
        if($code == 500){
            $task -> state = 'Failed';
            $task -> save();
            return ($task);
        }else{
            $output = $response['output'];

            $resultData = [
                'task_id' => $task_id,
                'data_type' => 'csv',
                'label' => $feature.'_'.$windowSize.'.csv',
                'data' => serialize($output)
            ];
            $result = Result::create($resultData);
            
            $task -> state = 'Completed';
            $task -> save();

            return ($task);
        }
        // return json_decode($response);

        // return ($task);

        // if(json_decode($response ->getBody()->getContents(), true)['code'][0] == 500){
            // $task -> state = 'Failed';
            // $task -> save();

            // return ($task);
        // }
        // else
        // {
        //     $output = json_decode($response ->getBody(), true)['output'][0];

        //     $resultData = [
        //         'task_id' => $task_id,
        //         'data_type' => 'csv',
        //         'label' => $feature.'_'.$windowSize.'.csv',
        //         'data' => serialize($output)
        //     ];
        //     $result = Result::create($resultData);
            
        //     $task -> state = 'Completed';
        //     $task -> save();

        //     return ($result);
        // }
    }

    public function createLGBMTask(Request $request) {
        $user_id=1;

        $filesArray = [];

        $preprocessedData = $request->file('dataFile');

        $filesArray[] = [
            'name' => 'files',
            'contents' => fopen($preprocessedData->path(), 'r'),
            'filename' => $preprocessedData->getClientOriginalName(),
        ];

        foreach ($request->file('files') as $file) {
            $filesArray[] = [
                'name' => 'files',
                'contents' => fopen($file->path(), 'r'),
                'filename' => $file->getClientOriginalName(),
            ];
        }

        $data = [
            'user_id' => $user_id,
            'task_name' => 'Model: LGBM',
            'date' => date("Y-m-d"),
            'state' => 'Pending',
        ];
        $task = Task::create($data);
        $task_id = json_decode($task, true)['id'];

        $new_client = new \GuzzleHttp\Client();

        $response = $new_client->post( 'http://127.0.0.1:6000/python-api', [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . Session::get('SesTok'),
            ],
            'multipart' => $filesArray,
        ]);

        $result = json_decode($response->getBody()->getContents(), true);
        $result_text = implode("|", $result);
        $resultData = [
                'task_id' => $task_id,
                'data_type' => 'json',
                'label' => 'model_lgbm',
                'data' => $result_text
            ];
        $resultInstance = Result::create($resultData);
        
        $task -> state = 'Completed';
        $task -> save();

        return ($task);
    }

    public function getResultByTaskId($task_id)
    {
        $user_id = 1;
        $task = Task::where('id', $task_id)->get();
        $task_user = $task[0]->user_id;
        if($task_user != $user_id){
            return ("The task creator (user) must log in");
        }
        $result = Result::where('task_id', $task_id)->get();
        return ($result[0]);
    }

}
