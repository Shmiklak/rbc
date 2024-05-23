import VotingBeatmap from "@/Components/VotingBeatmap.jsx";
import {router, useForm} from "@inertiajs/react";
import Swal from "sweetalert2";
const VotingForm = (props) => {

    const {data, setData, processing, errors, reset} = useForm({
        'votes': props.user_votes
    });

    const updateVotes = (newVote) => {
        if (data.votes.includes(newVote)) {
            let index = data.votes.indexOf(newVote),
                votesClone = data.votes;
            votesClone.splice(index, 1);
            setData('votes', votesClone);
        } else {
            if (data.votes.length < 3) {
                setData('votes', [...data.votes, newVote])
            } else {
                Swal.fire({
                    'text': 'Вы не можете выбрать больше 3 карт. Если вы решили изменить свой выбор, уберите свой голос с одной из карт.',
                    'icon': 'info',
                    'confirmButtonText': 'Ок'
                })
            }
        }
    }

    const submit = (e) => {
        e.preventDefault();
        if (data.votes.length === 0) {
            Swal.fire({
                'text': 'Не выбрано ни одной карты.',
                'icon': 'error',
                'confirmButtonText': 'Ок'
            })
        } else if (data.votes.length > 3) {
            Swal.fire({
                'text': 'Вы не можете выбрать больше 3 карт. Если вы решили изменить свой выбор, уберите свой голос с одной из карт.',
                'icon': 'info',
                'confirmButtonText': 'Ок'
            })
        } {
            router.post('/voting', data);
        }
    }

    return (
        <>
            <form onSubmit={submit} className="voting-form">
                <h1 className="text-center mb-3">Голосование</h1>
                <p className="text-center mb-5">
                    Выберите свои 3 любимые карты, участвующие в конкурсе в этом году. Ознакомиться с картами можно на
                    видео ниже,
                    а также скачать архив по <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">этой
                    ссылке</a>. Если вы уже голосовали, вы можете изменить свой выбор и снова отправить свои результаты.
                </p>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7tgqXfvKTHE?si=hsDvo-M2rDjE0LbK"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="voting-maps-list mt-5 mb-5">
                    <div className="row justify-content-center">
                        {props.beatmaps.map((beatmap) => (
                            <VotingBeatmap updateVotes={updateVotes} key={beatmap.id} beatmap={beatmap}
                                           votes={data.votes}/>))}
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <button type="submit" className="btn btn-primary">Проголосовать</button>
                </div>
            </form>
        </>
    )
}

export default VotingForm;
