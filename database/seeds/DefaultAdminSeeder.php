<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DefaultAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@kamleshpaul.com',
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('asdfghjkl002'),
        ]);
    }
}
