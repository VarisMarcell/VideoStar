import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"

/* test test test pls work */
const VideoContainer = ({ showFavoritesOnly, addCartItems }) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch("https://videostar.dacoder.io")
                const jsonData = await data.json()
                setData(jsonData.map((video) => {
                    return {...video, isFavorite: false}
                }))
                setIsLoading(false)
            } catch(error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    

    const toggleLike = (id) => {
        setData(prevData => {
            return prevData.map((video) => {
                return video.id === id ? {...video, isFavorite: !video.isFavorite} : video
            })
        })
    }

    const videoCards = data?.map((video) => (
        <VideoCard
            key={video.id}
            title={video.name}
            src={video.url}
            price={video.price}
            isFree={video.isFree}
            isFavorite={video.isFavorite}
            toggleLike={() => toggleLike(video.id)}
            isPurchased={video.isPurchased}
            addCartItems={() => addCartItems(video.name, video.price, video.url, video.id)}
        />
    ))

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