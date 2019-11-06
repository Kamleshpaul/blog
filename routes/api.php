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
})->middleware('auth:api');

Route::post('register','Auth\RegisterController@register');
Route::post('login','Auth\LoginController@login');

Route::group(['namespace' => 'Auth','middleware'=>'auth:api'], function () {
    Route::get('logout','LoginController@logOut');
});