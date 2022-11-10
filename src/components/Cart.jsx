const Cart = ({ toggleCart, cartItems, removeCartItems }) => {

    const currentCart = cartItems.map((video) => {
        return (
            <div className="cartItems">
                <div className="removeFromCart" onClick={() => removeCartItems(video.id)}>X</div>
                <p>{video.name}</p>
                <p>${video.price}</p>
            </div>
        )
    })

    let total = cartItems.reduce((prev, current) => prev + current.price, 0)

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