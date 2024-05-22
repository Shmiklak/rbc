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
        $voting_state = env("VOTING_STATE");
        return Inertia::render('Voting', [
            'voting_state' => $voting_state
        ]);
    }
}
