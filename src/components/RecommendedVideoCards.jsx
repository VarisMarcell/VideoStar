import VideoCard from "./VideoCard"

const RecommendedVideoCards = ({ data, addCartItems, togglePurchased }) => {

    /* Displays the "for you" videos */
    return (
        <div className="recommendedContainer">
            <h1>For you:</h1>
                {
                    data.filter(video => {
                        return !video.isPurchased
                    }).slice(0, 3).map(video => {
                        return (
                            <VideoCard
                                key={video.id}
                                id={video.id}
                                title={video.name}
                                src={video.url}
                                price={video.price}
                                isFree={video.isFree}
                                isFavorite={video.isFavorite}
                                duration={video.duration}
                                theaterMode={video.theaterMode}
                                toggleTheater={() => toggleTheater(video.id)}
                                toggleLike={() => toggleLike(video.id)}
                                isPurchased={video.isPurchased}
                                addCartItems={() => addCartItems(video.name, video.price, video.url, video.id, video.isPurchased)}
                                togglePurchased={() => togglePurchased(video.id)}
                            />
                        )
                    })
                }
        </div>
    )
}

export default RecommendedVideoCards