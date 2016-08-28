<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWhiteWinesTable extends Migration
{
    /**
     * Run the migration.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create('white_wines', function (Blueprint $table) {
			$table->string('id');
			$table->string('title');
			$table->string('description');
			$table->string('price');
			$table->string('type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migration.
     *
     * @return  void
     */
    public function down()
    {
        Schema::drop('white_wines');
    }
}