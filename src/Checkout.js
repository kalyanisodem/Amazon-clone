import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal.js";


function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad"
         src="https://images-na.ssl-images-amazon.com/images/G/01/AMZNPayments/Browse_Node/US_EN/Home/A1_HeroBanner_Desktop_GeneralCategory_CTA.jpg" alt=""/>
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
          {/* basket Items */}
          {/* basket Items */}
          {/* basket Items */}
          {/* basket Items */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
