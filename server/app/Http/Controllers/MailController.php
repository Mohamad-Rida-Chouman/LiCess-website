<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\DemoMail;

class MailController extends Controller
{
    public function index()
    {
        $mailData = [
            'title' => 'Mail from LiCess-Project',
            'body' => 'Thank you for using LiCess.
            Your results are ready.
            Please click on the button below to move to the dashboard and be amazed!',
        ];

        Mail::to('jaden.yuki.jy1@gmail.com')->send(new DemoMail($mailData));

        dd('Email send successfully.');
    }
}