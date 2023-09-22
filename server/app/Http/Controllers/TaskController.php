<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Result;
use Illuminate\Http\Request;
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
        $tasks = Task::where('user_id', $user_id)->get();
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
            'date' => date("Y-m-d"),
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
        else{
            $output = json_decode($response ->getBody()->getContents(), true)['output'];

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
            'task_name' => 'Feature Extraction',
            'date' => date("Y-m-d"),
            'state' => 'Pending',
        ];
        $task = Task::create($data);
        $task_id = json_decode($task, true)['id'];

        $new_client = new \GuzzleHttp\Client();

        $response = $new_client->post( 'http://127.0.0.1:5000/'.$feature, [
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
        ]);

        $output = json_decode($response ->getBody()->getContents(), true)['output'];

        $resultData = [
            'task_id' => $task_id,
            'data_type' => 'csv',
            'label' => 'w_'.$windowSize.'_'.$feature.'.csv',
            'data' => serialize($output)
        ];
        $result = Result::create($resultData);
        
        $task -> state = 'Completed';
        $task -> save();

        return ($task);

    }
}
