import {Head} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";

const Voting = () => {
    return (
        <>
            <Head title="Голосование"/>
            <div className="voting">
                <h1>Данная страница находится в разработке</h1>
            </div>
        </>
    );
}

Voting.layout = page => <App children={page}/>
export default Voting;
