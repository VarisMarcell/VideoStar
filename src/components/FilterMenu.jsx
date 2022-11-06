
const FilterMenu = ({ toggleFilterMenu, form, setForm }) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const handleClick = () => {
        setForm(
            {
                sort: "",
                showFreeOrPaid: "",
                showDuration: ""
            }
        )
    }


    return (
        <div className="filterMenuContainer">
            <div className="filterMenu">
                <p className="exitFilterMenu" onClick={ toggleFilterMenu }>X</p>
                <form>
                    <h3>Sort:</h3>
                    <div className="sortPrice">
                        <p>Price: </p>
                        <input 
                            type="radio" 
                            id="highToLow" 
                            name="sort" 
                            value="highToLow"
                            onChange={handleChange} 
                            checked={form.sort === "highToLow"}
                        />
                        <label htmlFor="highToLow">High to Low</label>

                        <input 
                            type="radio" 
                            id="lowToHigh" 
                            name="sort" 
                            value="lowToHigh"
                            onChange={handleChange}
                            checked={form.sort === "lowToHigh"}
                        />
                        <label htmlFor="lowToHigh">Low to High</label>
                    </div>
                    <div className="sortDuration">
                        <p>Duration: </p>
                        <input 
                            type="radio" 
                            id="shortToLong" 
                            name="sort" 
                            value="shortToLong"
                            onChange={handleChange}
                            checked={form.sort === "shortToLong"}
                        />
                        <label htmlFor="shortToLong">Short to Long</label>

                        <input 
                            type="radio" 
                            id="longToShort" 
                            name="sort" 
                            value="longToShort" 
                            onChange={handleChange}
                            checked={form.sort === "longToShort"}
                        />
                        <label htmlFor="longToShort">Long to Short</label>
                    </div>
                    <div className="sortAlphabetically">
                        <p>By title: </p>
                        <input 
                            type="radio" 
                            id="aToZ" 
                            name="sort" 
                            value="aToZ" 
                            onChange={handleChange}
                            checked={form.sort === "aToZ"}
                        />
                        <label htmlFor="aToZ">A to Z</label>

                        <input 
                            type="radio" 
                            id="zToA" 
                            name="sort" 
                            value="zToA"
                            onChange={handleChange}
                            checked={form.sort === "zToA"}
                        />
                        <label htmlFor="zToA">zToA</label>
                    </div>
                    <h3>Show:</h3>
                    <div className="showFreeOrPaid">
                        <p>Price: </p>
                        <input 
                            type="radio" 
                            id="showFree" 
                            name="showFreeOrPaid" 
                            value="showFree"
                            onChange={handleChange}
                            checked={form.showFreeOrPaid === "showFree"}
                        />
                        <label htmlFor="showFree">Free</label>

                        <input 
                            type="radio" 
                            id="showPaid" 
                            name="showFreeOrPaid" 
                            value="showPaid" 
                            onChange={handleChange}
                            checked={form.showFreeOrPaid === "showPaid"}
                        />
                        <label htmlFor="showPaid">Paid</label>
                    </div>
                    <div className="showDuration">
                        <p>Duration: </p>
                        <input 
                            type="radio" 
                            id="<15s" 
                            name="showDuration" 
                            value="<15s" 
                            onChange={handleChange}
                            checked={form.showDuration === "<15s"}
                        />
                        <label htmlFor="<15s">Less than 15 seconds</label>

                        <input 
                            type="radio" 
                            id="15-30s" 
                            name="showDuration" 
                            value="15-30s"
                            onChange={handleChange}
                            checked={form.showDuration === "15-30s"}
                        />
                        <label htmlFor="15-30s">15 to 30 seconds</label>

                        <input 
                            type="radio" 
                            id=">30s" 
                            name="showDuration" 
                            value=">30s" 
                            onChange={handleChange}
                            checked={form.showDuration === ">30s"}
                        />
                        <label htmlFor=">30s">Greater than 30 seconds</label>
                    </div>
                </form>
                <p className="clearFilters" onClick={handleClick}>Clear all filters</p>
            </div>
        </div>
    )  
}

export default FilterMenu