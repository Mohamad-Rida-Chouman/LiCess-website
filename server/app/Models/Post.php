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
        'user_email',
        'sensitivity',
        'specificity',
        'acc',
        'mcc',
        'auc',
        'fpr',
        'tpr',
        'comment',
    ];
}
