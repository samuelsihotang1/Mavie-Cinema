<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserSubscription;
use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@mavie.test',
            'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');

        UserSubscription::create([
            'user_id' => $admin->id,
            'subscription_plan_id' => 2,
            'price' => 800000,
            'expired_date' => Carbon::now()->addDay(12),
            'payment_status' => 'paid',
            'snap_token' => '1234567890',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
