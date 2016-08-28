<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MyNewTable extends Model
{
    
	public $table = 'my_new_tables';//'my_new_table';
	public $guarded = [];
	public $fillable = [ 'id',  'personal data', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}