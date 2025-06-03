import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ShoppingBagContext } from "../App";
import { useNavigate } from "react-router-dom";

function ShoppingBag() {
    const { shoppingBag, removeFromBag } = useContext(ShoppingBagContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
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

