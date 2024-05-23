import App from "@/Layouts/App.jsx";
import AnimatedBackground from "@/Components/AnimatedBackground.jsx";
import {Link} from "@inertiajs/react";

const Error500 = () => {
    return (
        <>
            <AnimatedBackground/>
            <div className="error-page">
                <h1>503</h1>
                <p className="mb-5">
                    Что-то пошло не так. Пожалуйста сообщите Shmiklak'у об ошибке.
                </p>
                <Link className="btn btn-primary" href={route('home')}>Вернуться на главную</Link>
            </div>
        </>
    );
}

export default Error500;
