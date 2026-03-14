<?php

namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('admins')->insert([
            'username' => 'admin@gmail.com',
            'password' => Hash::make('Admin@321'),
        ]);
    }
}