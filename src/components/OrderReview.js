import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { productContext } from "../App";

const OrderReview = () => {
    const location = useLocation();
    const shoppingBag = location.state?.shoppingBag || [];
    const { categories } = useContext(productContext);

    return (
        <div className="container pt-5">
            <h2 className="title">Order Review</h2>
            <hr style={{ width: "715px", margin: "0px 0px 0px 10px" }} />

            <div className="order-head">
                <div className="order-section">
                    {shoppingBag.length > 0 ? (
                        shoppingBag.map((item, index) => (
                            <div key={index} className="order-item">
                                <img src={item.img} alt={item.title} />
                                <div className="order-details">
                                    <h5>{item.title}</h5>
                                    <p>Quantity: 1</p>
                                    <Link to={`/product/${item.id}`} className="edit-link">Edit Order</Link>
                                </div>
                                <div className="order-price">
                                    <h5>${item.price.toFixed(2)}</h5>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items in the order.</p>
                    )}
                </div>

                <div className="order-summary">
                    <h4>Order Total</h4>
                    {shoppingBag.map((item, index) => (
                        <p key={index}>
                            1 {item.title} <span className="float-right">${item.price.toFixed(2)}</span>
                        </p>
                    ))}
                    <hr />
                    <h5>
                        Subtotal <span className="float-right">
                            ${shoppingBag.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </span>
                    </h5>
                    <Link to={'/checkout'} ><button className="btn-black">Fill Out Order Info</button></Link>
                </div>
            </div>
            <h4 className="mt-4">Add more to your bag</h4>
            <hr style={{ width: '715px', margin: '0px 0px 0px 10px' }} />
            <div className="suggested-products mb-5">
                {categories.slice(0, 5).map((data, index) => (
                    <div key={index} className="product mt-3">
                        <img src={data.img} alt={data.name} style={{ width: '140px' }} />
                        <p>{data.title}</p>
                        <p style={{ textAlign: 'start' }}>${data.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderReview;
