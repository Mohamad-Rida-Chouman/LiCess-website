<?php

namespace App\Http\Controllers;

use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResultController extends Controller
{
    public function index()
    {
        $results = Result::all();
        return response()->json($results);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'task_id' => 'required|numeric',
            'data_type' => 'required|string',
            'label' => 'required|string',
            'data' => 'required|longtext',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $result = Result::create($request->all());
        return response()->json($result, 200);
    }

    public function show(Result $result)
    {
        return response()->json($result, 200);
    }

    public function update(Request $request, $id)
    {
        $result = Result::find($id);
        $validator = Validator::make( $request->all(), [
            'state' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $result -> state = $request -> input('state');
        $result -> save();

        return response()->json($result, 200);
    }

    public function destroy(Result $result)
    {
        $result->delete();
        return response()->json('',200);
    }
}
