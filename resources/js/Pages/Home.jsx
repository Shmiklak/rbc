import {Head, Link} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";

const Home = () => {
    return (
        <>
            <Head title="Главная страница"/>
            <div className="home">
                <img src="/static/images/banner.jpg" className="home-banner"/>
                <div className="home-text text-center">
                    <h2 className="mb-5">Здравствуй, товарищ!</h2>

                    <p>
                        <strong>Russian Community Beatmapping Contest</strong> - это конкурс среди русскоязычных
                        мапперов в osu!. В данном конкурсе могут участвовать любые мапперы, кто владеют русским языком,
                        флаг в игре совершенно не важен. Благодаря этому сайту, вы можете проголосовать за свою любимую
                        карту участвующую в конкурсе в этом году. Больше деталей о Russian Community Beatmapping Contest
                        вы можете <a href="https://osu.ppy.sh/community/forums/topics/1924417" target="_blank">здесь</a>.
                    </p>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <Link className="btn btn-primary" href={route('voting')}>Проголосовать</Link>
                </div>
            </div>
        </>
    );
}

Home.layout = page => <App children={page}/>
export default Home;
