<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Slider;
use App\Models\Product;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $admin = Admin::where('username', $request->username)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {
            $token = $admin->createToken('admin-token')->plainTextToken;
            return response()->json(['token' => $token]);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['success' => true]);
    }

    public function saveSlider(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
        ]);

        $imagePath = $request->file('image')->store('sliders', 'public');

        Slider::create(['image' => $imagePath]);

        return response()->json(['success' => true,'image' => $imagePath,]);
    }

 public function saveProduct(Request $request)
{


    $request->validate([
        'name' => 'required|string',
        'main_image' => 'required|image|mimes:jpeg,png,jpg,gif',
        'modal_images.*' => 'image|mimes:jpeg,png,jpg,gif',
        'modal_video' => 'nullable|file|mimes:mp4,avi,mov',
    ]);

    $mainImagePath = $request->file('main_image')->store('products', 'public');

    $modalImages = [];

    // 1) Prefer the standard case: modal_images as array
    $files = $request->file('modal_images');

    // 2) If single file (UploadedFile), wrap as array
    if ($files instanceof \Illuminate\Http\UploadedFile) {
        $files = [$files];
    }

    // 3) If still null, check raw files keys for anything that looks like modal_images
    if (empty($files)) {
        foreach ($request->files->all() as $key => $value) {
            if (stripos($key, 'modal_image') !== false || stripos($key, 'modal_images') !== false) {
                // value can be single file or array
                if ($value instanceof \Illuminate\Http\UploadedFile) {
                    $files = [$value];
                } elseif (is_array($value)) {
                    $files = $value;
                }
                break;
            }
        }
    }

    // finally store any files we found
    foreach ($files ?? [] as $image) {
        if ($image && $image->isValid()) {
            $modalImages[] = $image->store('products/modals', 'public');
        }
    }

    $modalVideo = $request->hasFile('modal_video')
        ? $request->file('modal_video')->store('products/videos', 'public')
        : null;

    $product = Product::create([
        'name' => $request->name,
        'main_image' => $mainImagePath,
        'modal_images' => $modalImages,
        'modal_video' => $modalVideo,
    ]);

    return response()->json([
        'success' => true,
        'main_image' => $mainImagePath,
        'modal_images' => $modalImages,
        'product_id' => $product->id,
        'modal_video' => $modalVideo,
    ]);
}




    public function getContacts()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }
    public function deleteSlider($id)
    {
        $slider = Slider::find($id);
        if ($slider) {
            $slider->delete();
            return response()->json(['success' => true]);
        }
        return response()->json(['error' => 'Slider not found'], 404);
    }
    public function deleteProducts($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['success' => true]);
        }
        return response()->json(['error' => 'Product not found'], 404);
    }
}
