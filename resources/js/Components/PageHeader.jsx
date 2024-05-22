import {Link} from "@inertiajs/react";

const PageHeader = (props) => {
    return (
        <>
            <header className="page-header">
                <nav className="page-header-nav">
                    <div className="page-header-nav__logo">
                        <Link href={route('home')}>
                            <img src="/static/images/girl.png" alt="Russian Community Beatmapping Contest #5"/>
                            <div>
                                <span className="accent-text">Russian Community</span><br/>
                                Beatmapping Contest #5
                            </div>
                        </Link>
                    </div>
                    <div className="page-header-nav__profile">
                        {props.auth.user === null ? (
                          <a className="page-header-nav__profile__link" href={route('osu_login')}>Войти</a>
                        ) : (
                            <div className="page-header-nav__profile__authorised">
                                <div className="page-header-nav__profile__authorised__text">
                                    <div className="page-header-nav__profile__authorised__title">
                                        Привет, {props.auth.user.username}
                                    </div>
                                    <div className="page-header-nav__profile__authorised__signout">
                                        <a href={route('logout')}>Выйти</a>
                                    </div>
                                </div>
                                <img src={"https://a.ppy.sh/" + props.auth.user.osu_id} alt="Profile picture"/>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default PageHeader;
