const Cart = ({ toggleCart, cartItems, removeCartItems }) => {

    /* An array of videos that are currently in the cart */
    const currentCart = cartItems.map((video) => {
        return (
            <div className="cartItems">
                <div className="removeFromCart" onClick={() => removeCartItems(video.id)}>X</div>
                <p id="cartVideoName">{video.name}</p>
                <p>${video.price}</p>
            </div>
        )
    })

    /* Price total of all items in cart */
    let total = cartItems.reduce((prev, current) => prev + current.price, 0)

    /* Returns a cart with the total price, a "purchase" button, and an exit button */
    return (
        <div className="cartContainer">
            <div className="cart">
                <div className="cart-header">
                    <p>Total: ${total.toFixed(2)}</p>
                    <button id="purchase">Purchase</button>
                    <div className="exitCart" onClick={ toggleCart }>X</div>
                </div>
                <div className="cart-videos">{currentCart}</div>
            </div>
        </div>
    )
}

export default Cart