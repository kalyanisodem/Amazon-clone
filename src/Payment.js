import "./Payment.css";
import React from 'react';
import {useStateValue} from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className = "payment">
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>108 Lakota Pass</p>
          <p>Austin, Tx</p>
        </div>

      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review Items and delivery</h3>
        </div>
        <div className="payment_items">
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

      </div>
      <div className="payment__section">


      </div>

    </div>
  )
}

export default Payment
