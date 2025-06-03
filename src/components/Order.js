import React from "react";
import '../components/check.css'
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <h1>Order placed!</h1>
      <p style={{ fontSize: '15px', paddingTop: '10px' }}>A copy of your receipt has been sent to <br /> your email.</p>

      <div className="order-summarys">
        <div className="order-header">
          <span>1 × Sample Item</span>
          <span className="total-amount">Total: $109.50</span>
        </div>

        <div className="order-detailed">
          <div className="left-column">
            <p><strong>Name:</strong> JANE A DOE</p>
            <p><strong>Email address:</strong> jane.a.doe@gmail.com</p>
            <p><strong>Phone number:</strong> 555-555-5555</p>
            <p><strong>PICKUP AT:</strong> Marigold Mall, 123 Greenleaf Ave, New York, NY 12345</p>
          </div>

          <div className="right-column">
            <p><strong>Paid With:</strong> CardBrand ending in 1111</p>
            <p><strong>Exp. Date:</strong> 01/99</p>
            <p><strong>CVV:</strong> 000</p>
            <p><strong>Billing Address:</strong> 123 Chestnut St, New York, NY 12345</p>
          </div>
        </div>
      </div>

      <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}><button className="back-button">BACK TO SHOPPING</button></Link>
    </div>
  );
};

export default OrderConfirmation;
