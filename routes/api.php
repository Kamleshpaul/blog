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

Route::group(['namespace' => 'Auth'], function () {
    Route::post('login', 'LoginController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('register', 'RegisterController@register');
        Route::get('logout', 'LoginController@logOut');
        Route::get('auth-user', 'LoginController@authUser');
    });
});


Route::group(['namespace' => 'Admin', 'middleware' => 'auth:api'], function () {
    Route::apiResource('categories', 'BlogCategoryController');
    Route::apiResource('articles', 'BlogController');
});
