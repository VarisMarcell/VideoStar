const VideoContainer = ({ showFavoritesOnly, videoCards, isLoading }) => {
    const favoritesOnly = videoCards?.filter((video) => video.props.isFavorite === true)

    return (
        showFavoritesOnly ? 
        (<div className="videoContainer">
            {favoritesOnly}
        </div>) :
        (<div className="videoContainer">
            { !isLoading ? videoCards : "Loading..." }
        </div>)
    )
}

export default VideoContainer