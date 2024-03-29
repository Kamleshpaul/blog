<?php

namespace App\Models;

use App\traits\GetSlug;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use GetSlug;
    
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];
    //-------------------------------------------------------------------------
}
