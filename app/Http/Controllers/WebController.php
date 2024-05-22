<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    public function index() {
        return Inertia::render('Home');
    }

    public function voting() {
        return Inertia::render('Voting');
    }
}
