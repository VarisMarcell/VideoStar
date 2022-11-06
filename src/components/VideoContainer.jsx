import { useState } from "react"

const VideoContainer = ({ showFavoritesOnly, videoCards, isLoading, form }) => {
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


    return (
        // showFavoritesOnly ? 
        // (<div className="videoContainer">
        //     {currentCards}
        // </div>) :
        // (<div className="videoContainer">
        //     { !isLoading ? videoCards : "Loading..." }
        // </div>)
        <div className="videoContainer">
            { !isLoading ? videoCards : "Loading..."}
        </div>
    )
}

export default VideoContainer