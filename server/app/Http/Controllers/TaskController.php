<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
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

    public function update(Request $request, Task $task)
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

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json('',200);
    }
}
