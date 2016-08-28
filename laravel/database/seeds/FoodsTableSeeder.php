<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
		DB::table('foods')->truncate();

		DB::table('foods')->insert([
            'id'	=>	'1001', 
            'title'	=>	'Buckwheat Orecchiette', 
            'description'	=>	'with Nettle Pur&eacute;e, Black Trumpets &amp; Smoked Yolk', 
            'price'	=>	'18', 
            'type'	=>	'main', 
            ]);


        DB::table('foods')->insert([
            'id'	=>	'1002', 
            'title'	=>	'Squid Ink Spaghetti', 
            'description'	=>	'with Red Shrimp, Brussels Sprouts, &amp; Saffron', 
            'price'	=>	'24', 
            'type'	=>	'main', 
            ]);


        DB::table('foods')->insert([
            'id'	=>	'1003', 
            'title'	=>	'Poached Pollock', 
            'description'	=>	'with Dandelion Greens, Buchot Mussels, Yellow Eye Beans &amp; &#039;Nduja', 
            'price'	=>	'26', 
            'type'	=>	'main', 
            ]);


        DB::table('foods')->insert([
            'id'	=>	'1004', 
            'title'	=>	'Brook Trout', 
            'description'	=>	'with Spaghetti Squash, Sweet Potatoes &amp; Apple Cider Sauce', 
            'price'	=>	'25', 
            'type'	=>	'main', 
            ]);


        
    }
}