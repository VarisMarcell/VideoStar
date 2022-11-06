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

    // const handleHover = () => {
    //     var figure = $(".video").hover( hoverVideo, hideVideo );

    //     function hoverVideo() {  
    //         $('video', this).get(0).play(); 
    //     }
        
    //     function hideVideo() {
    //         $('video', this).get(0).pause(); 
    //     }
    // }

    return (
        <div className="videoCard">
            <div className="videoWrap">
                <video className="video" width={"360"} height={"202"} /* "only use when the video has been clicked" controls */ crossOrigin="anonymous" preload="auto">
                <source src={src} type="video/mp4"/>
                </video>
                <div id="unpaid">
                    <i className="bi bi-currency-dollar"></i>
                </div>
            </div>
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

