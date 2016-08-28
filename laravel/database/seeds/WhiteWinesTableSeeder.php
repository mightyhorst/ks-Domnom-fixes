<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class WhiteWinesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
		DB::table('white_wines')->truncate();

		DB::table('white_wines')->insert([
            'id'	=>	'3001', 
            'title'	=>	'Ch&acirc;teau Roquefort, Bordeaux Blanc 2013 (Sauvignon Blanc) - Bordeaux, France', 
            'description'	=>	'', 
            'price'	=>	'9', 
            'type'	=>	'White Wine', 
            ]);


        DB::table('white_wines')->insert([
            'id'	=>	'3002', 
            'title'	=>	'Ribeira Sacra, Algueira, &quot;Brandan Blanco&quot; 2013 (Godello) &mdash; Galicia, Spain', 
            'description'	=>	'', 
            'price'	=>	'11', 
            'type'	=>	'White Wine', 
            ]);


        DB::table('white_wines')->insert([
            'id'	=>	'3003', 
            'title'	=>	'Riesling Trocken, Weingut Von Winning 2012 - Pfalz, Germany', 
            'description'	=>	'', 
            'price'	=>	'15', 
            'type'	=>	'White Wine', 
            ]);


        DB::table('white_wines')->insert([
            'id'	=>	'3004', 
            'title'	=>	'Lugana Superiore, Ca Lojera Di Tiraboschi 2011 - Lombardi, Italy', 
            'description'	=>	'', 
            'price'	=>	'17', 
            'type'	=>	'White Wine', 
            ]);


        
    }
}