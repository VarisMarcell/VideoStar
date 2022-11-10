const Navbar = ({ toggleFavorites, toggleCart, form, setForm, showFavoritesOnly }) => {

    const handleChange = (event) => {
        const { name, value } = event.target 
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="navbar">
            <nav className="navBarContainer">
                <ul className="navbar-list">
                    <li className="navbar-listItem addToCartButton" onClick={ toggleCart }><i className="bi bi-cart3"></i></li>
                    {!showFavoritesOnly && 
                        <li className="navbar-listItem likeButton" onClick={ toggleFavorites }><i className="bi bi-heart"></i></li>
                    }
                    {showFavoritesOnly &&
                        <li className="navbar-listItem likeButton" onClick={ toggleFavorites }><i className="bi bi-heart-fill"></i></li>
                    }
                </ul>
                <form className="sortAndFilter" onSubmit={handleSubmit}>
                    <div className="filterFreePaidContainer">
                        <label className="labelFilterFreePaid" htmlFor="filterFreePaid">Free or Paid</label>
                        <select 
                            id="filterFreePaid"
                            value={form.showFreeOrPaid}
                            onChange={handleChange}
                            name="showFreeOrPaid"
                        >
                            <option value="">All</option>
                            <option value="showFree">Show free</option>
                            <option value="showPaid">Show paid</option>
                        </select>
                    </div>
                    <div className="filterDurationContainer">
                        <label className="labelFilterDuration" htmlFor="filterDuration">Filter by duration</label>
                        <select
                            id="filterDuration"
                            value={form.showDuration}
                            onChange={handleChange}
                            name="showDuration"
                        >
                            <option value="">All</option>
                            <option value="<15s">Less than 15 seconds</option>
                            <option value="15-30s">15 to 30 seconds</option>
                            <option value=">30s">More than 30 seconds</option>
                        </select>
                    </div>
                    <div className="sortContainer">
                        <label className="labelSort" htmlFor="sort">Sort by: </label>
                        <select
                            id="sort"
                            value={form.sort}
                            onChange={handleChange}
                            name="sort"
                        >
                            <option value="">All</option>
                            <option value="highToLow">Price: High to Low</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="shortToLong">Length: Short to Long</option>
                            <option value="longToShort">Length: Long to Short</option>
                            <option value="aToZ">Title: A to Z</option>
                            <option value="zToA">Title: Z to A</option>
                        </select>
                    </div>
                    <input 
                        className="searchBar" 
                        type="text" 
                        placeholder="Search here" 
                        value={form.search} name="search" 
                        onChange={handleChange}
                    />
                </form>
            </nav> 
        </div>
    )
}

export default Navbar