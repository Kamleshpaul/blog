<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    /**
     * Return Home view which render vuejs assets and component
     *
     * @return 'Home'
     */
    public function index()
    {
        return view('Home');
    }
    //-------------------------------------------------------------------------
}
