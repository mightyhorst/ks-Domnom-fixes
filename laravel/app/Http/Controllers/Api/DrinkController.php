<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

// Model
use App\Models\Drink;

class DrinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return  Response
     */
    public function index()
    {
        $data = Drink::all();

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return  Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param    Request  $request
     * @return  Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param    int  $id
     * @return  Response
     */
    public function show($id)
    {
        $model = Drink::find($id);

        return $model;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param    int  $id
     * @return  Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param    Request  $request
     * @param    int  $id
     * @return  Response
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param    int  $id
     * @return  Response
     */
    public function destroy($id)
    {
        Drink::destroy($id);

        return response()->json(['success'=>true]);
    }
}
