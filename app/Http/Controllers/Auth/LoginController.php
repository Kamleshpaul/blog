<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Login via passport
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $http = new \GuzzleHttp\Client;
        $response = $http->post(url('/') . '/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => $this->client_id,
                'client_secret' => $this->client_secret,
                'username' => $request->email,
                'password' => $request->password,
            ],
        ]);
    }
    //-------------------------------------------------------------------------
}
