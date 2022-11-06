const Navbar = ({ toggleFavorites, toggleCart }) => {

    return (
        <div className="navbar">
            <nav className="logoContainer">
                <h3 className="logo">videostar</h3>
                <ul className="navbar-list">
                    <li className="navbar-listItem" onClick={ toggleCart }><i className="bi bi-cart3"></i></li>
                    <li className="navbar-listItem" onClick={ toggleFavorites }><i className="bi bi-heart"></i></li>
                    {/* <li className="navbar-listItem"><i className="bi bi-sort-alpha-down"></i></li>
                    <li className="navbar-listItem"><i className="bi bi-stopwatch"></i></li>
                    <li className="navbar-listItem"><i className="bi bi-currency-dollar"></i></li> */}
                </ul>
                <div className="navbar-form">
                    <p className="navbar-listItem"><i className="bi bi-sort-down-alt"></i></p>
                    <input type="text" placeholder="Search here" />
                </div>

            </nav> 
            
        </div>
    )
}

export default Navbar