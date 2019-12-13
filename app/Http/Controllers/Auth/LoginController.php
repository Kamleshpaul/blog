<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $client_id, $client_secret;

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
            'password' => $request->password,
        ];

        if (auth()->attempt($credentials)) {

            $url = url('/') . '/oauth/token';
            $post_data = [
                'grant_type' => 'password',
                'client_id' => $this->client_id,
                'client_secret' => $this->client_secret,
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '*',
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
            $response = curl_exec($ch);
            curl_close($ch);

            $responseObj = json_decode($response);
            $responseObj->user = auth()->user();

            return response([
                'data' => $responseObj,
                'message' => 'success',
            ]);
        } else {
            return response([
                'message' => 'User Not Found.',
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
            'message' => 'success',
        ]);
    }
    //-------------------------------------------------------------------------

    /**
     * Auth user
     *
     * @return \Auth\User
     */
    public function authUser()
    {
        return response([
            'data' => auth()->user(),
        ]);
    }
    //-------------------------------------------------------------------------
}
