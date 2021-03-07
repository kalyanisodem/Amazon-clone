import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  console.log("USer before authon>>>>>", user)
  const handleAuthentication = () => {
    console.log("USer >>>>>", user)
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
    <Link to="/">
      <img className="header__logo"
        src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png" alt=""/>
     </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
       <Link to={!user && "/login"}>
        <div  onClick= {handleAuthentication} className="header__option">
          <span className="header__OptionLineOne">
             Hello {!user ? 'Guest' : user?.email}
          </span>
          <span className="header__OptionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
       </Link>
        <div className="header__option">
          <span className="header__OptionLineOne">
            Returns
          </span>
          <span className="header__OptionLineTwo">
            & Orders
          </span>
        </div>
        <div className="header__option">
        <span className="header__OptionLineOne">
          Your
        </span>
        <span className="header__OptionLineTwo">
          Prime
        </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__OptionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
     </div>
    </div>
  );
}

export default Header;
