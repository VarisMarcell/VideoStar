import { useState } from "react"

const VideoCard = (props) => {
    const { 
            title, 
            src, 
            price, 
            isFree, 
            isFavorite, 
            toggleLike, 
            addCartItems, 
            isPurchased
    } = props

    return (
        <div className="videoCard">
            <video className="video" width={"350"} height={"200"} controls crossOrigin="anonymous" >
                <source src={src} type="video/mp4" />
            </video>
            <div className="videoCard-infoContainer">
                {   isFavorite ? 
                    isFree && (<i className="bi bi-heart-fill likeButton" onClick={toggleLike}></i>) 
                    : isFree && (<i className="bi bi-heart likeButton" onClick={toggleLike}></i>)  
                } 
                {   isPurchased ?
                    !isFree && (<i class="bi bi-cart-check-fill"></i>)
                    : !isFree && (<i className="bi bi-cart-plus addToCartButton" onClick={addCartItems}></i>)
                }
                <p className="videoCard-title">{ title }</p>
                { !isFree && <p className="videoCard-price">${ price }</p> }
            </div>
        </div>
    )
}

export default VideoCard

