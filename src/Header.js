import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type='text'

                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="navbar__option">
                        <span className="navbar__optionOne">Hello {user ? user.email : 'Guest'} Guest</span>
                        <span className="navbar__optionTwo">{
                            user ? 'Sign Out' : 'Sign In'
                        }</span>
                    </div>
                </Link>
                <div className="navbar__option">
                    <span className="navbar__optionOne">Returns</span>
                    <span className="navbar__optionTwo">& Orders</span>
                </div>

                <div className="navbar__option">
                    <span className="navbar__optionOne">Your</span>
                    <span className="navbar__optionTwo">Prime</span>
                </div>
                <Link to="/checkout" className="navbar__option">
                    <div className="navbar__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="navbar__optionTwo navbar__basketCount"> {basket?.length} </span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
