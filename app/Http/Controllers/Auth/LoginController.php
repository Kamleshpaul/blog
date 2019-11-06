<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public $client_id, $client_secret;


    public function __construct()
    {
        $client = \DB::table('oauth_clients')->where('id', 2)->first();
        $this->client_id = $client->id;
        $this->client_secret = $client->secret;
    }
    //-------------------------------------------------------------------------


    /**
     * Login via passport
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($credentials)) {

            $http = new \GuzzleHttp\Client;
            $response = $http->post(url('/') . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $this->client_id,
                    'client_secret' => $this->client_secret,
                    'username' => $request->email,
                    'password' => $request->password,
                    'scope' => '*',
                ],
            ]);

            $responseData = json_decode((string) $response->getBody(), true);
            $responseData['user'] = auth()->user();

            return response([
                'data' => $responseData,
                'message' => 'success'
            ]);
        } else {
            return response([
                'message' => 'User Not Found.'
            ]);
        }
    }
    //-------------------------------------------------------------------------


    /**
     * Login via passport
     *
     * @return \Illuminate\Http\Response
     */
    public function logOut()
    {
        $user = auth()->user()->token();
        $user->revoke();
        return response([
            'message' => 'success'
        ]);
    }
    //-------------------------------------------------------------------------
}
