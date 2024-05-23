<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ElevatedController extends Controller
{
    public function index() {
        return Inertia::render('Elevated/Admin');
    }
}
