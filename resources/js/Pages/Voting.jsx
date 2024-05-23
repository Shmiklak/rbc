import {Head} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import VotingPending from "@/Components/VotingPending.jsx";
import VotingFinished from "@/Components/VotingFinished.jsx";
import LoginRequired from "@/Components/LoginRequired.jsx";
import VotingForm from "@/Components/VotingForm.jsx";

const Voting = ({ auth, voting_state, beatmaps, user_votes }) => {
    return (
        <>
            <Head title="Голосование"/>
            { auth.user === null ? (<LoginRequired/>) : (
                <div className="voting">
                    {voting_state === "PENDING" ? (<VotingPending/>) : (voting_state === "FINISHED" ? (
                        <VotingFinished/>) : (<VotingForm user_votes={user_votes} beatmaps={beatmaps}/>))}
                </div>
            )}

        </>
    );
}

Voting.layout = page => <App children={page}/>
export default Voting;
