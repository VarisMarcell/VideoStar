const VideoCard = (props) => {
    const { title, src, price } = props
    return (
        <div className="videoCard">
            <video className="video" width={"350"} height={"200"} controls crossOrigin="anonymous" >
                <source src={src} type="video/mp4" />
            </video>
            <div className="videoCard-infoContainer">
                <i className="bi bi-heart likeButton"></i>
                <p className="videoCard-title">{ title }</p>
                <p className="videoCard-price">${ price }</p>
            </div>
        </div>
    )
}

export default VideoCard