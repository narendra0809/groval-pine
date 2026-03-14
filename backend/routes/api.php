<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/admin/login', [AdminController::class, 'login']);

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/logout',[AdminController::class, 'logout']);
    Route::post('/admin/slider', [AdminController::class, 'saveSlider']);
    Route::delete('admin/delete/{id}',[AdminController::class, 'deleteSlider']);
    Route::delete('admin/products/{id}',[AdminController::class, 'deleteProducts']);
    Route::post('/admin/product', [AdminController::class, 'saveProduct']);
    Route::get('/admin/contacts', [AdminController::class, 'getContacts']);
});

Route::get('/user/sliders', [UserController::class, 'getSliders']);
Route::get('/user/products', [UserController::class, 'getProducts']);
Route::post('/user/contact', [UserController::class, 'saveContact']);
