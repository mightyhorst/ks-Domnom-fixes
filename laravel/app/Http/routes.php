<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, X-CSRF-Token, X-XSRF-TOKEN');
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


/*
|--------------------------------------------------------------------------
| API - DB
|--------------------------------------------------------------------------
*/


Route::group(['prefix' => 'api', 'namespace' => 'Api'], function() {

	 
		Route::resource('/user', 'UserController');
	 
		Route::resource('/blogpost', 'BlogPostController');
	 
		Route::resource('/food', 'FoodController');
	 
		Route::resource('/drink', 'DrinkController');
	 
		Route::resource('/snack', 'SnackController');
	 
		Route::resource('/whitewine', 'WhiteWineController');
	 
		Route::resource('/beer', 'BeerController');
	 
		Route::resource('/mynewtable', 'MyNewTableController');
		


});
