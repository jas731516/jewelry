import React from "react";
const OrderReview = () => {
  return (
    <div className="order-review-container">
      <div className="order-details">
        <h2>Order Review</h2>
        <div className="order-item">
          <img src={require("../images/neck1.png")} alt="Sample Item" className="item-image" />
          <div className="item-info">
            <p className="item-name">Sample Item</p>
            <p className="item-price">$100.00</p>
            <p className="item-quantity">Quantity: 1</p>
            <a href="#" className="edit-order">EDIT ORDER</a>
          </div>
          <button className="delete-btn">🗑</button>
        </div>
        <h3>Add more to your bag</h3>
        <div className="additional-items">
          {[
            { name: "DIAMOND CHOKER", price: "$300.00" },
            { name: "LEAF PENDANT", price: "$90.00" },
            { name: "INTERLOCKING GOLD", price: "$200.00" },
            { name: "RUBY PENDANT", price: "$250.00" },
            { name: "OPAL HEART", price: "$100.00" }
          ].map((item, index) => (
            <div className="extra-item" key={index}>
              <img src={require("../images/neck1.png")} alt={item.name} />
              <p className="extra-name">{item.name}</p>
              <p className="extra-price">{item.price}</p>
              <button className="add-btn">+</button>
            </div>
          ))}
        </div>
      </div>
      <div className="order-total">
        <h3 style={{borderBottom:"1px solid black"}}>Order Total</h3>
        <div className="total-info">
          <p>1 Sample Item <span>$100.00</span></p>
        </div>
        <div className="subtotal">
          <p><strong>Subtotal</strong> <span><strong>$100.00</strong></span></p>
        </div>
        <button className="checkout-btn">FILL OUT ORDER INFO</button>
      </div>
    </div>
  );
};
export default OrderReview;
