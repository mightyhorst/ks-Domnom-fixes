<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMyNewTablesTable extends Migration
{
    /**
     * Run the migration.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create('my_new_tables', function (Blueprint $table) {
			$table->string('id');
			$table->string('personal data');
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
        Schema::drop('my_new_tables');
    }
}