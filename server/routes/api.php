<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\API\AuthController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::resource('tasks', TaskController::class);
Route::post('tasks/{id}', [TaskController::class, 'update']);
Route::post('preprocess', [TaskController::class, 'createPreprocessingTask']);
Route::post('featureExtract', [TaskController::class, 'createFeatureTask']);
Route::post('modelLGBM', [TaskController::class, 'createLGBMTask']);
Route::get('taskByUser', [TaskController::class, 'getTasksByUserId']);
Route::get('resultByTask/{task_id}', [TaskController::class, 'getResultByTaskId']);
Route::get('shareableResult/{task_id}', [TaskController::class, 'getShareableResult']);



// Route::get('send-mail',[MailController::class,'index']);

// Route::get('/email/verify', function () {
//     return view('auth.verify-email');
// })->middleware('auth')->name('verification.notice');
 
// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();
 
//     return redirect('/home');
// })->middleware(['auth', 'signed'])->name('verification.verify');
 
// Route::post('/email/verification-notification', function (Request $request) {
//     $request->user()->sendEmailVerificationNotification();
 
//     return back()->with('message', 'Verification link sent!');
// })->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
