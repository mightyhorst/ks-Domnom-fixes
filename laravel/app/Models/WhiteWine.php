<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WhiteWine extends Model
{
    
	public $table = 'white_wines';//'white_wine';
	public $guarded = [];
	public $fillable = [ 'id',  'title',  'description',  'price',  'type', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}