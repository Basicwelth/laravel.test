<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'ClientController@index');
Route::post('/credit-client', 'ClientController@addCreditPerson');
Route::post('/credit-entity', 'ClientController@addCreditEntity');
Route::post('/contribution-client', 'ClientController@addContribution');
Route::prefix('admin')->name('admin.')->group(function (){
    Route::get('/', 'AdminController@index');
    Route::get('post/create',function (){
        return "Post create";
    });
    Route::get('post/{id}/edit',function ($id){
        return "Edit post $id";
    });
});
