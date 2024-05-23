import App from "@/Layouts/App.jsx";
import {Link} from "@inertiajs/react";

const VotingSuccess = ({ auth }) => {
    return (
        <>
            <div className="voting-pending text-center">
                Спасибо за ваш голос.<br/>
                Заходите на наш <a href="https://discord.gg/w4a9cUEmWa" target="_blank">Discord сервер</a>,
                чтобы быть в курсе обновлений.
            </div>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-primary mt-5" href={route('home')}>Вернуться на главную</Link>
            </div>
        </>
    )
}

VotingSuccess.layout = page => <App children={page}/>
export default VotingSuccess;
