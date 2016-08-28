<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UsersTableSeeder::class); 
        $this->call(BlogPostsTableSeeder::class); 
        $this->call(FoodsTableSeeder::class); 
        $this->call(DrinksTableSeeder::class); 
        $this->call(SnacksTableSeeder::class); 
        $this->call(WhiteWinesTableSeeder::class); 
        $this->call(BeersTableSeeder::class); 
        $this->call(MyNewTablesTableSeeder::class); 
        
        Model::reguard();
    }
}
