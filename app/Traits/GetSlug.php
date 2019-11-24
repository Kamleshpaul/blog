<?php

namespace App\traits;

trait GetSlug
{
    /**
     * get slug
     *
     * @param name target field to genrate slug
     * @param colName column name for get old slug default should be slug
     */
    public function scopeGetSlug($query, $name, $colName = 'slug')
    {

        $slug = \Str::slug($name);
        // check all slug with 0-9 number
        $canvasSlugCheck = $query->whereRaw($colName . " RLIKE '^{$slug}(-[0-9]+)?$'");
        if ($canvasSlugCheck->count()) {

            // get last slug of db
            $lastSlug = $canvasSlugCheck->latest()->first()->$colName;

            // get last slug number
            $lastSlugNumber = intval(str_replace($slug . '-', '', $lastSlug));

            // increment by 1 to last slug number
            return $slug . '-' . ($lastSlugNumber + 1);
        } else {
            return $slug;
        }
    }
    //-------------------------------------------------------------------------
}
//end of the trait GetSlug
//end of the file GetSlug.php
