import { useState, useEffect } from 'react'
import './App.css'
import VideoContainer from './components/VideoContainer'
import VideoCard from './components/VideoCard'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Logo from './components/Logo'

function App() {

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [displayTheaterMode, setDisplayTheaterMode] = useState(false)
  const [form, setForm] = useState(
      {
        sort: "",
        showFreeOrPaid: "",
        showDuration: "",
        search: ""
      }
  )


  useEffect(() => {
      const getData = async () => {
          try {
              const data = await fetch("https://videostar.dacoder.io")
              const jsonData = await data.json()
              setData(jsonData.map((video) => {
                  return {...video, isFavorite: false, theaterMode: false}
              }))
              setIsLoading(false)
          } catch(error) {
              console.log(error)
          }
      }
      getData()
  }, [])

  const videoCards = data?.map((video) => (
    <VideoCard
        key={video.id}
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
  ))

  const toggleTheater = (id) => {
    setData(prevData => {
      return prevData.map((video) => {
        console.log(video.theaterMode)
        return video.id === id ? {...video, theaterMode: !video.theaterMode} : video
      })
    })
    setDisplayTheaterMode(prevDisplayTheaterMode => !prevDisplayTheaterMode)
  }


  const toggleLike = (id) => {
    setData(prevData => {
        return prevData.map((video) => {
          return video.id === id ? {...video, isFavorite: !video.isFavorite} : video
        })
    })
  }

  const togglePurchased = (id) => {
      setData(prevData => {
          return prevData.map((video) => {
              return video.id === id ? {...video, isPurchased: !video.isPurchased} : video
          })
      })
  }

  const toggleFavorites = () => {
    setShowFavoritesOnly(prevShowFavorites => !prevShowFavorites)
  }

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart)
  }

  const addCartItems = (name, price, url, id, isPurchased) => {
    setCartItems(prevCartItems => {
      return (
        [
          ...prevCartItems, 
          {
            key: id,
            id: id,
            name: name,
            price: price,
            url: url, 
            isPurchased: isPurchased
          }
        ]
      )
    })
  }

  const removeCartItems = (id) => {
    togglePurchased(id)
    setCartItems(prevCartItems => {
      console.log(prevCartItems)
      return prevCartItems.filter(video => video.id !== id)
    })
  }


  return (
    <div className="App">
      <div className="main">
        <Logo />
        <Navbar 
          toggleFavorites={() => toggleFavorites()}
          toggleCart={() => toggleCart()}
          toggleFilterMenu={() => toggleFilterMenu()}
          form={form}
          setForm={setForm}
        />
        {showCart && 
          <Cart 
            cartItems={cartItems} 
            toggleCart={() => toggleCart()}
            removeCartItems={removeCartItems}
          />
        }
        <VideoContainer 
          videoCards={videoCards}
          isLoading={isLoading}
          showFavoritesOnly={showFavoritesOnly}
          addCartItems={addCartItems}
          form={form}
          displayTheaterMode={displayTheaterMode}
          setDisplayTheaterMode={() => setDisplayTheaterMode(prevTheaterMode => !prevTheaterMode)}
        />
      </div>
    </div>
  )
}

export default App
