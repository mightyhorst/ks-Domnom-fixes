<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    
	public $table = 'users';//'users';
	public $guarded = [];
	public $fillable = [ 'id',  'email',  'pwd',  'first_name',  'last_name',  'about', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}