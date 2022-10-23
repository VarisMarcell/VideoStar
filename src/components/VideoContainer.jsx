import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"

const VideoContainer = () => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch("https://videostar.dacoder.io")
                const jsonData = await data.json()
                setData(jsonData)
                setIsLoading(false)
            } catch(error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <div className="videoContainer">
            { 
                (!isLoading ? data?.map((video) => {
                    return (
                        <div>
                            <VideoCard
                                key={video.id}
                                title={video.name}
                                src={video.url}
                                price={video.price}
                            />
                        </div>
                    )
                }) : "Loading...")
            }
        </div>
    )
}

export default VideoContainer