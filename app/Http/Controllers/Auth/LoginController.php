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
            return response([
                'client_id' => $this->client_id,
                'client_secret' => $this->client_secret,
                'email' => $request->email,
                'password' => $request->password,
                'user' => auth()->user()
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
        \DB::table('oauth_access_tokens')->where('user_id',auth()->user()->id)->delete();
        return response([
            'message' => 'success'
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
