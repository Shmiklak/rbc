import {Link} from "@inertiajs/react";

const LoginRequired = () => {
    return (
        <div className="login-required text-center">
            Для продолжения работы, вам необходимо авторизоваться используя свой аккаунт в osu!.

            <div className="d-flex justify-content-center mt-5">
                <a className="btn btn-primary" href={route('osu_login')}>Авторизоваться</a>
            </div>
        </div>
    )
}

export default LoginRequired;
