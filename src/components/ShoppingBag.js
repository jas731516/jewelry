import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ShoppingBagContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "bootstrap";

function ShoppingBag() {
  const { shoppingBag, removeFromBag } = useContext(ShoppingBagContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const offcanvasEl = document.getElementById("offcanvasRight");
    if (offcanvasEl) {
      const bsOffcanvas = Offcanvas.getInstance(offcanvasEl) || new Offcanvas(offcanvasEl);
      bsOffcanvas.hide();

      // Wait for animation to finish, then remove backdrop
      setTimeout(() => {
        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) {
          backdrop.parentNode.removeChild(backdrop); // Remove dim background
        }

        // Reset scroll lock class and inline style
        document.body.classList.remove("offcanvas-backdrop");
        document.body.style.overflow = "";
      }, 300);
    }

    // Navigate to order review page
    const serializedBag = shoppingBag.map(item => ({
      id: item.id,
      title: item.title,
      img: item.img,
      price: Number(item.price),
    }));

    navigate('/orderreview', { state: { shoppingBag: serializedBag } });
  };

  return (
    <div className="shopping-bag-wrapper">
      {shoppingBag.length === 0 ? (
        <p className="empty-message">Your shopping bag is empty.</p>
      ) : (
        <>
          <div className="bag-items">
            {shoppingBag.map((item, index) => (
              <div key={index} className="bag-item">
                <img src={item.img} alt={item.title} className="bag-item-image" />
                <div className="bag-item-details">
                  <h5 className="item-title">{item.title}</h5>
                  <p className="item-price">${Number(item.price).toFixed(2)}</p>
                  <p className="item-quantity">Quantity: 1</p>
                </div>
                <FaTrash className="delete-icon" onClick={() => removeFromBag(item.id)} />
              </div>
            ))}
          </div>
          <div className="checkout-wrapper">
            <button className="checkout-buttons" onClick={handleCheckout}>
              CHECKOUT ({shoppingBag.length})
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingBag;
