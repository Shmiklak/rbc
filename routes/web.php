<?php

use App\Http\Controllers\ElevatedController;
use App\Http\Controllers\oAuth\OsuAuthController;
use App\Http\Controllers\WebController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WebController::class, 'index'])->name('home');
Route::get('/voting', [WebController::class, 'voting'])->name('voting');
Route::post('/voting', [WebController::class, 'votingPost'])->name('voting.post');

Route::middleware('elevated_access')->group(function () {
    Route::get('/elevated', [ElevatedController::class, 'index'])->name('elevated');
});

Route::get('osu_auth', [OsuAuthController::class, 'redirectToProvider'])->name('osu_login');
Route::get('osu_login', [OsuAuthController::class, 'handleProviderCallback']);
Route::get('logout', [OsuAuthController::class, 'handleLogout'])->name('logout');
