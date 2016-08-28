<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class BeersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
		DB::table('beers')->truncate();

		DB::table('beers')->insert([
            'id'	=>	'4001', 
            'title'	=>	'Kirin Ichiban', 
            'decsription'	=>	'', 
            'price'	=>	'5', 
            ]);


        DB::table('beers')->insert([
            'id'	=>	'4002', 
            'title'	=>	'Bell&#039;s Amber Ale', 
            'decsription'	=>	'', 
            'price'	=>	'7', 
            ]);


        DB::table('beers')->insert([
            'id'	=>	'4003', 
            'title'	=>	'Captain Lawrence Imperial IPA', 
            'decsription'	=>	'', 
            'price'	=>	'7', 
            ]);


        
    }
}