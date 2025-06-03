
import React, { useState } from "react";
import '../components/check.css';
import { Link } from "react-router-dom";

const Checkout = () => {
    const [showShipping, setShowShipping] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState("");
    return (
        <>
            <div className="checkout-grid">
                <div className="form-section">
                    <a href="#" className="back-link">BACK TO ORDER REVIEW</a>
                    <h1 className="purchasepara">My Information</h1>
                    <hr />
                    <form>
                        <input type="email" placeholder="Email address" className="inputs" />
                        <input type="tel" placeholder="Phone Number" className="inputs" />
                        <input type="text" placeholder="Address" className="inputs" />
                        <div className="row check1">
                            <input type="text" placeholder="City" id="check-inputcity" className="inputs-small" />
                            <input type="text" placeholder="State" id="check-inputcity" className="inputs-small" />
                            <input type="text" placeholder="ZIP Code" id="check-inputcity" className="inputs-small" />
                        </div>
                        <h3 className="purchasetext">How would you like to receive your order?</h3>
                        <hr />
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="radio"
                                    name="deliveryMethod"
                                    checked={deliveryMethod === "shipment"}
                                    onChange={() => setDeliveryMethod("shipment")}
                                />
                                Byshipment
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="deliveryMethod"
                                    checked={deliveryMethod === "pickup"}
                                    onChange={() => setDeliveryMethod("pickup")}
                                />
                                Inperson
                            </label>
                        </div>
                    </form>
                </div>

                <div className="totals-container">
                    <h3 className="totals-title" style={{ textAlign: 'center' }}>Order Total</h3>
                    <hr />
                    <div className="totals-details">
                        <div className="d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>$100.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Sales Tax </p>
                            <p>$5.00</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="totals-final"><b>Total</b></p>
                            <p className="totals-amount"><b>$109.50</b></p>
                        </div>
                    </div>
                    <Link to={'/order'} ><button type="button" className="btn totals-button btn-dark ">PURCHASE</button></Link>
                </div>
            </div>
            {showShipping && (
                <div className="payment-container mb-5">
                    <div className="section">
                        <div className="section-header">
                            <h2 className="checktext ">Shipping Details</h2>
                            <a href="#" className="autofill-link">Autofill with My Information</a>
                            <hr />
                        </div>
                        <input type="text" placeholder="Shipping address" className="inputs" />
                        <div className="row">
                            <input type="text" placeholder="City" className="inputs-small" />
                            <input type="text" placeholder="State" className="inputs-small" />
                            <input type="text" placeholder="ZIP Code" className="inputs-small" />
                        </div>
                    </div>
                    <div className="checksection">
                        <h2 className="checktext">Billing Information</h2>
                        <input type="text" placeholder="Name on Card" className="inputs" />
                        <input type="text" placeholder="Debit / Credit Card Number" className="inputs" />
                        <div className="row check1">
                            <input type="text" placeholder="Expiration Date (MM/YY)" className="inputs-small" />
                            <input type="text" placeholder="CVV" className="inputs-small" />
                            <input type="text" placeholder="ZIP Code" className="inputs-small" />
                        </div>
                        <input type="text" placeholder="Billing Address" className="inputs" />
                        <p className="same-address">Same as Shipping Address</p>
                    </div>
                </div>
            )}
            {deliveryMethod === "shipment" && (
                <div className="payment-container mb-5">
                    <div className="section">
                        <div className="section-header">
                            <h2 className="checktext">Shipping Details</h2>
                            <a href="#" className="autofill-link">Autofill with My Information</a>
                        </div>
                        <input type="text" placeholder="Shipping address" className="inputs" />
                        <div className="row check1">
                            <input type="text" placeholder="City" className="inputs-small" />
                            <input type="text" placeholder="State" className="inputs-small" />
                            <input type="text" placeholder="ZIP Code" className="inputs-small" />
                        </div>
                    </div>
                    <div className="checksection">
                        <h2 className="checktext">Billing Information</h2>
                        <input type="text" placeholder="Name on Card" className="inputs-small1" />
                        <input type="text" placeholder="Debit / Credit Card Number" className="inputs-small1 ms-3" />
                        <div className="row check1">
                            <input type="text" placeholder="Expiration Date (MM/YY)" className="inputs-small" />
                            <input type="text" placeholder="CVV" className="inputs-small" />
                            <input type="text" placeholder="ZIP Code" className="inputs-small" />
                        </div>
                        <input type="text" placeholder="Billing Address" className="inputs" />
                        <p className="same-address">Same as Shipping Address</p>
                    </div>
                </div>
            )}
            {deliveryMethod === "pickup" && (
                <div className="pickup-container mb-5">
                    <div className="pickup-section">
                        <div className="header">
                            <h2>Pickup Location</h2>
                            <a href="#" className="change-location">Choose a different location</a>
                        </div>
                        <div className="pickup-info">
                            <p className="mall-name"><strong>MARIGOLD MALL</strong></p>
                            <p>13 Greenleaf Ave.</p>
                            <p>New York, NY 12345</p>
                            <p className="pickup-time">Pickup Available from <span>8 AM to 7 PM</span></p>
                        </div>
                    </div>
                    <div className="billing-section">
                        <h2>Billing Information</h2>
                        <input type="text" placeholder="Name on Card" className="inputs" />
                        <input type="text" placeholder="Debit / Credit Card Number" className="inputs" />
                        <div className="row check1">
                            <input type="text" placeholder="Expiration Date (MM/YY)" className="inputs-small" />
                            <input type="text" placeholder="CVV" className="inputs-small" />
                            <input type="text" placeholder="ZIP Code" className="inputs-small" />
                        </div>
                        <input type="text" placeholder="Billing Address" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;
