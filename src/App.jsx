import { useState } from 'react'
import './App.css'
import VideoContainer from './components/VideoContainer'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const toggleFavorites = () => {
    setShowFavoritesOnly(prevShowFavorites => !prevShowFavorites)
  }

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart)
  }

  const addCartItems = (name, price, url, id) => {
    setCartItems(prevCartItems => {
      return (
        [
          ...prevCartItems, 
          {
            id: id,
            name: name,
            price: price,
            url: url
          }
        ]
      )
    })
  }

  const removeCartItems = (id) => {
    console.log("Function entered")
    setCartItems(prevCartItems => {
      return prevCartItems.filter(video => video.id !== id)
    })
  }


  return (
    <div className="App">
      <Logo />
      <div className="main">
        <Navbar 
          toggleFavorites={() => toggleFavorites()}
          toggleCart={() => toggleCart()}
        />
        {showCart && 
          <Cart 
            cartItems={cartItems} 
            toggleCart={() => toggleCart()}
            removeCartItems={removeCartItems}
          />
        }
        <VideoContainer 
          showFavoritesOnly={showFavoritesOnly}
          addCartItems={addCartItems}
        />
      </div>
    </div>
  )
}

export default App
