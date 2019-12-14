<?php

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
    Route::get('categories-count', 'BlogCategoryController@count');
    Route::apiResource('articles', 'BlogController');
    Route::get('articles-count', 'BlogController@count');
    Route::get('today-posting', 'BlogController@todayPost');
});

Route::group(['namespace' => 'User'], function () {
    Route::get('all-blogs', 'BlogController@index');
    Route::get('blog/{slug}', 'BlogController@show');
    Route::post('send-mail', 'ContactUsController@sendMail');
});
