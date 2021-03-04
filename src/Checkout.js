import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";


function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad"
         src="https://images-na.ssl-images-amazon.com/images/G/01/AMZNPayments/Browse_Node/US_EN/Home/A1_HeroBanner_Desktop_GeneralCategory_CTA.jpg" alt=""/>
        <div>
        <h2 className="checkout__title">Your Shopping Basket</h2>

        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* checkout product*/}
        {/* checkout product*/}
        {/* checkout product*/}
        {/* checkout product*/}
        {/* checkout product*/}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
