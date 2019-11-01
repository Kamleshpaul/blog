<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
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
     * Register User via passport
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response([
            'data' => $user,
            'message' => 'success'
        ]);
    }
    //-------------------------------------------------------------------------
}
