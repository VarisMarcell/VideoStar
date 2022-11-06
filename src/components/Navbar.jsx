import { useState } from "react"

const Navbar = ({ toggleFavorites, toggleCart, toggleFilterMenu }) => {

    return (
        <div className="navbar">
            <nav className="logoContainer">
                <h3 className="logo">videostar</h3>
                <ul className="navbar-list">
                    <li className="navbar-listItem" onClick={ toggleCart }><i className="bi bi-cart3"></i></li>
                    <li className="navbar-listItem" onClick={ toggleFavorites }><i className="bi bi-heart"></i></li>
                    <li className="navbar-listItem" onClick={ toggleFilterMenu }><i className="bi bi-sort-down-alt"></i></li>
                </ul>
                <form className="navbar-filter">
                    <input type="text" placeholder="Search here" />
                </form>

            </nav> 
            
        </div>
    )
}

export default Navbar