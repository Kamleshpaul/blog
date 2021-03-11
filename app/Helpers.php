<?php


if (! function_exists('base64ImageUpload')) {
    /**
     * this is helper function for save base64 Image in s3
     *
     * @return $imageUrl
     * */
    function base64ImageUpload($path, $file)
    {
        $image = $file; // your base64 encoded

        if (preg_match('/base64/', $file)) {
            $imageInfo = explode(";base64,", $image);
            $imgExt = str_replace('data:image/', '', $imageInfo[0]);
    
            $image = substr($image, strpos($image, ",") + 1);
            $name = \Str::random(40).'.'.$imgExt;
            $filePath = $path.'/'.$name;
            \Storage::put($filePath, base64_decode($image));

            return $filePath;
        } else {
            return 'data is not base64' ;
        }
    }
}
//-----------------------------------------------------------------------------
