<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Snack extends Model
{
    
	public $table = 'snacks';//'snacks';
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