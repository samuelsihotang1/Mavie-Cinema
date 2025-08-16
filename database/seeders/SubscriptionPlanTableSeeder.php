<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 49000,
                'active_period_in_months' => 1,
                'features' => json_encode(['feature1', 'feature2']),
            ],
            [
                'name' => 'Premium',
                'price' => 89000,
                'active_period_in_months' => 1,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
