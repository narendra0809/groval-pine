<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   protected $casts = [
    'modal_images' => 'array',
];
protected $fillable = ['name','main_image','modal_images','modal_video'];
}