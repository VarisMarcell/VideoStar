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
            isPurchased, 
            togglePurchased
    } = props

    const handleClickAdd = () => {
        addCartItems()
        togglePurchased()
    }

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
                    !isFree && (<i className="bi bi-cart-check-fill addToCartButton"></i>)
                    : !isFree && (<i className="bi bi-cart-plus addToCartButton" onClick={handleClickAdd}></i>)
                }
                <p className="videoCard-title">{ title }</p>
                { !isFree && <p className="videoCard-price">${ price }</p> }
            </div>
        </div>
    )
}

export default VideoCard

