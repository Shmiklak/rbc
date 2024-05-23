const VotingBeatmap = (props) => {

    const isMapSelected = () => {
        return props.votes.includes(props.beatmap.id);
    }

    return (
        <div className="col-xl-4 col-lg-3 col-6 mb-5">
            <div className="voting-beatmap">
                <div className="voting-beatmap-image-container">
                    <img src={props.beatmap.beatmap_image} alt={props.beatmap.anonymised_name}
                         className="voting-beatmap-image"/>
                </div>

                <span className="voting-beatmap-title">{props.beatmap.anonymised_name}</span>

                <button type="button" className={isMapSelected() ? "voting-beatmap-button active" : "voting-beatmap-button"}
                        onClick={() => props.updateVotes(props.beatmap.id)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.3951 10.9838L18.5708 15.299L20.0406 21.7522C20.1217 22.1025 20.1008 22.4699 19.9806 22.8079C19.8604 23.146 19.6462 23.4395 19.3651 23.6514C19.0841 23.8633 18.7487 23.9841 18.4015 23.9985C18.0542 24.013 17.7106 23.9204 17.4141 23.7325L12.0002 20.2787L6.58314 23.7325C6.28664 23.9193 5.94345 24.011 5.59678 23.996C5.25012 23.9811 4.91548 23.8601 4.63501 23.6484C4.35453 23.4366 4.14076 23.1436 4.02062 22.8062C3.90047 22.4688 3.87932 22.1021 3.95983 21.7522L5.43497 15.299L0.610735 10.9838C0.348402 10.7488 0.158677 10.4389 0.065256 10.0927C-0.0281653 9.74661 -0.0211431 9.37961 0.0854455 9.03759C0.192034 8.69557 0.393465 8.39368 0.664583 8.16963C0.9357 7.94557 1.26449 7.80927 1.60989 7.77776L7.93499 7.24879L10.375 1.1278C10.5071 0.794214 10.7318 0.50887 11.0208 0.308049C11.3097 0.107227 11.6497 0 11.9975 0C12.3454 0 12.6854 0.107227 12.9743 0.308049C13.2632 0.50887 13.488 0.794214 13.6201 1.1278L16.059 7.24879L22.3841 7.77776C22.7302 7.8081 23.0599 7.94364 23.332 8.16738C23.6041 8.39113 23.8065 8.69314 23.9138 9.03558C24.021 9.37801 24.0284 9.74564 23.935 10.0924C23.8416 10.4392 23.6515 10.7496 23.3886 10.9849L23.3951 10.9838Z"
                            fill="black"/>
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default VotingBeatmap;
