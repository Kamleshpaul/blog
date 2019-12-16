<?php

use App\Models\WebSetting;
use Illuminate\Database\Seeder;

class WebSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WebSetting::create([
            'key' => 'web_name',
            'value' => 'Blog',
        ]);

        WebSetting::create([
            'key' => 'logo',
            'value' => '',
        ]);
    }
}
