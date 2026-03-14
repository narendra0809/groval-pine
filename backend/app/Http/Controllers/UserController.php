<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Models\Product;
use App\Models\Contact;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    public function getSliders()
    {
        $sliders = Slider::all();
        return response()->json($sliders);
    }

    public function getProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function saveContact(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'number' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif',
        ]);

            $ImagePath = $request->file('image')->store('contacts', 'public');


        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'number' => $request->number,
            'images' => $ImagePath,
        ]);

        // Send email to admin
        Mail::to('np4375@gmail.com')->send(new ContactMail($contact));

        return response()->json(['success' => true]);
    }
}