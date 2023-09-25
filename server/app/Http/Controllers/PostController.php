<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index()
    {
        $post = Post::orderBy('created_at', 'DESC')->get();
        return response()->json($post);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $user_id = 1;
        $validator = Validator::make( $request->all(), [
            'date' => 'required|date',
            'user_email' => 'required|email',
            'model' => 'required|string',
            'sensitivity' => 'required|numeric',
            'specificity' => 'required|numeric',
            'accuracy' => 'required|numeric',
            'mcc' => 'required|numeric',
            'auc' => 'required|numeric',
            'fpr' => 'required|string',
            'tpr' => 'required|string',
            'comment' => 'string',
        ]);
        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $post = Post::create($request->all());
        $post ->user_id = $user_id;
        $post -> save();
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
