<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index()
    {
        $post = Post::all();
        return response()->json($post);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'user_id' => 'required|numeric',
            'date' => 'required|date',
            'user_email' => 'required|email',
            'sensitivity' => 'required|numeric',
            'specificity' => 'required|numeric',
            'accuracy' => 'required|numeric',
            'mcc' => 'required|numeric',
            'auc' => 'required|numeric',
            'fpr' => 'required|string',
            'tpr' => 'required|string',
            'comment' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $post = Post::create($request->all());
        return response()->json($post, 200);
    }

    public function show(Post $post)
    {
        return response()->json($post, 200);
    }

    public function update()
    {
        //
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json('',200);
    }
}
