<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class SnacksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
		DB::table('snacks')->truncate();

		DB::table('snacks')->insert([
            'id'	=>	'2001', 
            'title'	=>	'Bread &amp; Housemade Cultured Butter', 
            'description'	=>	'with Raw Honey, Radishes &amp; Sea Salt', 
            'price'	=>	'7', 
            'type'	=>	'snack', 
            ]);


        DB::table('snacks')->insert([
            'id'	=>	'2002', 
            'title'	=>	'Pork Rillettes with Pickles &amp; Toast', 
            'description'	=>	'with Roasted Brussels Sprouts', 
            'price'	=>	'7', 
            'type'	=>	'snack', 
            ]);


        DB::table('snacks')->insert([
            'id'	=>	'2003', 
            'title'	=>	'Chicken Liver Mousse with Pickles &amp; Toast', 
            'description'	=>	'', 
            'price'	=>	'7', 
            'type'	=>	'snack', 
            ]);


        
    }
}