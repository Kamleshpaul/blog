<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WebSetting;
use Illuminate\Http\Request;

class WebSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $resWebName = WebSetting::find(1);
        $resLogo = WebSetting::find(2);
        $logo = \Storage::url($resLogo->value);

        return response([
            'logo' => $logo,
            'web_name' => $resWebName->value,
        ]);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = $request->all();
        if (WebSetting::find(1)) {
            WebSetting::where('id', 1)->update([
                'key' => 'web_name',
                'value' => $data['websiteName'],
              ]);
        } else {
            WebSetting::create([
                'key' => 'web_name',
                'value' => $data['websiteName'],
              ]);
        }

        $file = $request->logo;
        if (preg_match('/base64/', $file)) {
            $logo = base64ImageUpload('logo', $file);

            if (WebSetting::find(2)) {
                WebSetting::where('id', 2)->update([
                    'key' => 'logo',
                    'value' => $logo,
                  ]);
            } else {
                WebSetting::create([
                    'key' => 'logo',
                    'value' => $logo,
                  ]);
            }
        }


        $resLogo = WebSetting::find(2);
        $resWebName = WebSetting::find(1);
        $logo = \Storage::url($resLogo->value);

        return response([
            'logo' => $logo,
            'web_name' => $resWebName->value,
        ]);
    }
}
