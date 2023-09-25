<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'model',
        'user_email',
        'sensitivity',
        'specificity',
        'accuracy',
        'mcc',
        'auc',
        'fpr',
        'tpr',
        'comment',
    ];
    protected $attributes = [
        'user_id' => 0,
        'comment' => 'These are the results of my run, check them out!',
    ];
}
