<?php

namespace App\Http\Controllers;

use App\Models\Beatmap;
use App\Models\Vote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    public function index() {
        return Inertia::render('Home');
    }

    public function voting() {
        $voting_state = env("VOTING_STATE");
        if ($voting_state === "STARTED") {
            $beatmaps = Beatmap::all();
            $user_votes = Vote::where('user_id', auth()->user()->id)->pluck('beatmap_id')->toArray();
        } else {
            $beatmaps = null;
            $user_votes = [];
        }

        return Inertia::render('Voting', [
            'voting_state' => $voting_state,
            'beatmaps' => $beatmaps,
            'user_votes' => $user_votes,
        ]);
    }

    public function votingPost(Request $request) {
        $this->validate($request, [
           "votes" => ["required", "array", "min:1", "max:3"]
        ]);

        $votes = $request->get('votes');
        $user = auth()->user();

        $old_votes = Vote::where('user_id', $user->id)->get();
        foreach ($old_votes as $old_vote) {
            $old_vote->delete();
        }

        foreach ($votes as $vote) {
            Vote::create([
               'user_id' => $user->id,
               'beatmap_id' => $vote,
            ]);
        }

        return Inertia::render('VotingSuccess');
    }
}
