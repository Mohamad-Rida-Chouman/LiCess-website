<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Task;
use App\Models\User;
use GuzzleHttp\Psr7;
use App\Models\Result;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

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
        $user_id = Auth::id();
        $validator = Validator::make( $request->all(), [
            // 'user_id' => 'required|numeric',
            'task_name' => 'required|string',
            'date' => 'required|date',
            'state' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }
        

        $task = Task::create($request->all());
        $task ->user_id = $user_id;
        $task -> save();

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
        $user_id = Auth::id();
        $tasks = Task::where('user_id', $user_id)->orderBy('created_at', 'DESC')->get();
        return response()->json($tasks);
    }

    public function createPreprocessingTask(Request $request) {
        $user_id = Auth::id();

        $fastapath = $request -> fasta -> path();
        $sitesCsvPath = $request -> sitesCsv -> path();
        $windowSize = $request -> windowSize;

        $data = [
            'user_id' => $user_id,
            'task_name' => 'Preprocessed Window Size: '.$windowSize,
            'date' => Carbon::now()->format("Y-m-d H:i:s"),
            'state' => 'Pending',
        ];
        $task = Task::create($data);
        $task -> user_id = $user_id;
        $task -> save();
        $task_id = json_decode($task, true)['id'];

        $client = new Client();

        $promise = $client->postAsync( 'http://127.0.0.1:5000/dataset?windowSize='.$windowSize, [
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
        }
        else
        {
            $output = $response['output'];
            
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
        // $user_id=1;
        $user_id = Auth::id();

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
    }

    public function createModelTask(Request $request) {
        $user_id = Auth::id();
        // const API_URL = process.env.REACT_APP_API_URL;

        $filesArray = [];

        $preprocessedData = $request->file('dataFile');
        $model = $request->model;

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
            'task_name' => 'Model: '.$model,
            'date' => date("Y-m-d"),
            'state' => 'Pending',
        ];
        $task = Task::create($data);
        $task_id = json_decode($task, true)['id'];

        $client = new Client();

        $promise = $client->postAsync( 'http://127.0.0.1:6000/'.$model.'-api', [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . Session::get('SesTok'),
            ],
            'multipart' => $filesArray,
        ])->then(
            function ($response) {
                $res = json_decode($response->getBody()->getContents(), true);
                return($res);
            },
            function ($exception) {
                $res = array('output' => $exception->getMessage(), 'error' => 500);
                return($res);
            }
        );

        $response = $promise->wait();
        $code = $response["error"];

        if($code == 500){
            $task -> state = 'Failed';
            $task -> save();
            return ($task);
        }else{
            $result = $response;
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
       
    }

    public function getResultByTaskId($task_id)
    {
        $user_id = Auth::id();
        $task = Task::where('id', $task_id)->get();
        $task_user = $task[0]->user_id;
        if($task_user != $user_id){
            return ("The task creator (user) must log in");
        }
        $result = Result::where('task_id', $task_id)->get();
        return ($result[0]);
    }

    public function getShareableResult($task_id)
    {
        $user_id = Auth::id();
        $result = Task::join('results', 'tasks.id', '=', 'results.task_id')
            ->join('users', 'tasks.user_id', '=', 'users.id')
            ->where('tasks.id', $task_id)
            -> select(
                'users.email as email',
                'tasks.date as date',
                'tasks.task_name as model',
                'results.data as data',
            )
            ->get();

        return($result);
    }

}
