<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beer extends Model
{
    
	public $table = 'beers';//'beer';
	public $guarded = [];
	public $fillable = [ 'id',  'title',  'decsription',  'price', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}