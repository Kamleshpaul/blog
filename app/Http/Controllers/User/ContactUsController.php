<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Mail\ContactUsMail;
use App\User;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    /**
     * Handel contact us from.
     *
     * @return \Illuminate\Http\Blog
     */
    public function sendMail(Request $request)
    {
        $mailData = [
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "message" => $request->message,
        ];
        $user = User::find(1);
        \Mail::to($user->email)->send(new ContactUsMail($mailData));

        return response([
            'message' => 'Mail has been send we will contact you soon.',
        ]);
    }
}
