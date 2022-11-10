const VideoContainer = ({ showFavoritesOnly, videoCards, isLoading, form, displayTheaterMode, setDisplayTheaterMode, toggleTheater }) => {

    if (showFavoritesOnly) {
        videoCards = videoCards.filter(video => {
            return video.props.isFavorite === true
        })
    } 

    if (form.search !== "") {
        videoCards = videoCards.filter(video => {
            if (video.props.title.toLowerCase().includes(form.search.toLowerCase())) {
                return video
            }
        })
    }

    if (form.sort === "highToLow") {
        videoCards = videoCards.sort((a, b) => {
            if (a.props.price > b.props.price) {
                return -1
            } else if (a.props.price < b.props.price) {
                return 1
            } else {
                return 0
            }
        })
    } else if (form.sort === "lowToHigh") {
        videoCards = videoCards.sort((a, b) => {
            if (a.props.price < b.props.price) {
                return -1
            } else if (a.props.price > b.props.price) {
                return 1
            } else {
                return 0
            }
        })
    } else if (form.sort === "shortToLong") {
        videoCards = videoCards.sort((a, b) => {
            if (a.props.duration < b.props.duration) {
                return -1
            } else if (a.props.duration > b.props.duration) {
                return 1
            } else {
                return 0
            }
        })
    } else if (form.sort == "longToShort") {
        videoCards = videoCards.sort((a, b) => {
            if (a.props.duration > b.props.duration) {
                return -1
            } else if (a.props.duration < b.props.duration) {
                return 1
            } else {
                return 0
            }
        })
    } else if (form.sort === "aToZ") {
        videoCards = videoCards.sort((a, b) => {
            if (a.props.title.toLowerCase().localeCompare(b.props.title.toLowerCase()) === -1) {
                return -1
            } else if (a.props.title.toLowerCase().localeCompare(b.props.title.toLowerCase()) === 1) {
                return 1
            } else {
                return 0
            }
        })
    } else if (form.sort === "zToA") {
        videoCards = videoCards.sort((a, b) => {
            if (a.props.title.toLowerCase().localeCompare(b.props.title.toLowerCase()) === -1) {
                return 1
            } else if (a.props.title.toLowerCase().localeCompare(b.props.title.toLowerCase()) === 1) {
                return -1
            } else {
                return 0
            }
        })
    }

    if (form.showFreeOrPaid === "showFree") {
        videoCards = videoCards.filter(video => {
            return video.props.isFree === true
        })
    } else if (form.showFreeOrPaid === "showPaid") {
        videoCards = videoCards.filter(video => {
            return video.props.isFree === false
        })
    }

    if (form.showDuration === "<15s") {
        videoCards = videoCards.filter(video => {
            return parseInt(video.props.duration.slice(6, 8)) < 15
        })
    } else if (form.showDuration === "15-30s") {
        videoCards = videoCards.filter(video => {
            return (parseInt(video.props.duration.slice(6, 8)) >= 15) && (parseInt(video.props.duration.slice(6, 8)) <= 30)
        })
    } else if (form.showDuration === ">30s") {
        videoCards = videoCards.filter(video => {
            return parseInt(video.props.duration.slice(6, 8)) > 30
        })
    }

    const videoForTheaterMode = () => {
        const targetVideo = videoCards.filter(video => {
            return video.props.theaterMode === true
        })

        const exitTheater = (targetVideo) => {
            console.log(targetVideo)
            toggleTheater(targetVideo.props.id)
        }

        return (
            <div className="theaterModeGrayedBackground">
                <div className="theaterContainer">
                    <video width="70%" height="500px" controls crossOrigin="anonymous" className="video">
                        <source src={targetVideo[0].props.src} type="video/mp4" />
                    </video>
                    <p className="exitTheater" onClick={() => exitTheater(targetVideo[0])}>X</p>
                </div>
            </div>
            
            
        )
    }

    return (
        <div className="content">
            { displayTheaterMode && videoForTheaterMode() }
            <div className="videoContainer">
                { !isLoading ? videoCards : "Loading..."}
            </div>
        </div>
        
    )
}

export default VideoContainer