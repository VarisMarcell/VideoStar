const VideoContainer = ({ showFavoritesOnly, videoCards, isLoading, form, displayTheaterMode, setDisplayTheaterMode, toggleTheater }) => {

    /* If favorites only icon is toggled, filters out and displays favorited videos */
    if (showFavoritesOnly) {
        videoCards = videoCards.filter(video => {
            return video.props.isFavorite === true
        })
    } 

    /* Searches the titles based on what the user types in the search bar */
    if (form.search !== "") {
        videoCards = videoCards.filter(video => {
            if (video.props.title.toLowerCase().includes(form.search.toLowerCase())) {
                return video
            }
        })
    }

    /* Sorts the videos from price high to low */
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
    /* Sorts the videos from price low to high*/
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
    /* Sorts the videos from short to long*/
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
    /* Sorts the videos from long to short */
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
    /* Sorts the videos from a to z */
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
    /* Sorts the videos from z to a */
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

    /* Displays free videos only */
    if (form.showFreeOrPaid === "showFree") {
        videoCards = videoCards.filter(video => {
            return video.props.isFree === true
        })
    /* Displays paid videos only */
    } else if (form.showFreeOrPaid === "showPaid") {
        videoCards = videoCards.filter(video => {
            return video.props.isFree === false
        })
    }

    /* Displays videos shorter than 15 seconds */
    if (form.showDuration === "<15s") {
        videoCards = videoCards.filter(video => {
            return parseInt(video.props.duration.slice(6, 8)) < 15
        })
    /* Displays videos between 15 and 30 seconds */
    } else if (form.showDuration === "15-30s") {
        videoCards = videoCards.filter(video => {
            return (parseInt(video.props.duration.slice(6, 8)) >= 15) && (parseInt(video.props.duration.slice(6, 8)) <= 30)
        })
    /* Displays videos longer than 30s */
    } else if (form.showDuration === ">30s") {
        videoCards = videoCards.filter(video => {
            return (parseInt(video.props.duration.slice(6, 8)) > 30) && (parseInt(video.props.duration.slice(0, 2)) > 0) && (parseInt(video.props.duration.slice(3, 5)) > 0)
        })
    }

    /* Identifies the movie that will display in theater mode */
    const videoForTheaterMode = () => {
        const targetVideo = videoCards.filter(video => {
            return video.props.theaterMode === true
        })

        /* Exits theater mode and toggles the theaterMode property on the video */
        const exitTheater = (targetVideo) => {
            toggleTheater(targetVideo.props.id)
        }

        /* Theater mode */
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

    /* Displays all the videos, or a Loading... sign if they are still loading. Also displays theater mode if displayTheaterMode is true*/
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