import { useState, useEffect } from 'react'
import './App.css'
import VideoContainer from './components/VideoContainer'
import VideoCard from './components/VideoCard'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Logo from './components/Logo'
import RecommendedVideoCards from './components/RecommendedVideoCards'

function App() {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [data, setData] = useState([])
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

  /* Imports all the videos from the API */
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

  /* Sets each video card with properties provided from the API, along with the 
  functions to toggle theater mode, to toggle like, and to add the item to the cart */
  const videoCards = data?.map((video) => (
    <VideoCard
        key={video.id}
        id={video.id}
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

  /* Determines the video to display in theater mode based on the id (argument), and toggles theater mode*/
  const toggleTheater = (id) => {
    setData(prevData => {
      return prevData.map((video) => {
        return video.id === id ? {...video, theaterMode: !video.theaterMode} : video
      })
    })
    setDisplayTheaterMode(prevDisplayTheaterMode => !prevDisplayTheaterMode)
  }

  /* When a video is liked, changes the property isFavorite to the opposite of previous value 
  based on the id argument*/
  const toggleLike = (id) => {
    setData(prevData => {
        return prevData.map((video) => {
          return video.id === id ? {...video, isFavorite: !video.isFavorite} : video
        })
    })
  }

  /* When a video is added to cart, changes the property isPurchased to opposite of previous value 
  based on the id argument*/
  const togglePurchased = (id) => {
      setData(prevData => {
          return prevData.map((video) => {
              return video.id === id ? {...video, isPurchased: !video.isPurchased} : video
          })
      })
  }

  /* Displays only favorited videos */
  const toggleFavorites = () => {
    setShowFavoritesOnly(prevShowFavorites => !prevShowFavorites)
  }

  /* Displays the cart */
  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart)
  }

  /* Sets the cart items to the previous items, plus the new item being added 
  Accepts arguments name, price, url, id, and isPurchased, which are properties 
  of the video that are used in the cart and for cart functionality */
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

  /* Removes an item from the cart based on the id argument */
  const removeCartItems = (id) => {
    togglePurchased(id)
    setCartItems(prevCartItems => {
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
          showFavoritesOnly={showFavoritesOnly}
        />
        {showCart && 
          <Cart 
            cartItems={cartItems} 
            toggleCart={() => toggleCart()}
            removeCartItems={removeCartItems}
          />
        }
        {!showFavoritesOnly &&
          <RecommendedVideoCards
            data={data}
            addCartItems={addCartItems}
            togglePurchased={togglePurchased}
          />
        }
        <VideoContainer 
          videoCards={videoCards}
          isLoading={isLoading}
          showFavoritesOnly={showFavoritesOnly}
          addCartItems={addCartItems}
          form={form}
          displayTheaterMode={displayTheaterMode}
          setDisplayTheaterMode={() => setDisplayTheaterMode(prevDisplayTheaterMode => !prevDisplayTheaterMode)}
          toggleTheater={toggleTheater}
        />
      </div>
    </div>
  )
}

export default App
