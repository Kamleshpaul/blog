<?php

use App\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('user', function () {
    return response([
        'data'=>User::all(),
    ]);
});

Route::group(['namespace' => 'Auth'], function () {
    Route::post('register','RegisterController@register');
});