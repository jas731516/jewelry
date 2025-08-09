import React, { useState } from "react";
import '../components/check.css';
import { useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // Common form states
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zip, setZip] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [error, setError] = useState("");

  // Shipment-specific fields
  const [shipAddress, setShipAddress] = useState("");
  const [shipCity, setShipCity] = useState("");
  const [shipState, setShipState] = useState("");
  const [shipZip, setShipZip] = useState("");

  // Payment fields (shared)
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const handlePurchase = () => {
    // Basic info validation
    if (!email || !phone || !address || !city || !stateValue || !zip || !deliveryMethod) {
      setError("Please fill out all required fields.");
      return;
    }

    // Delivery method-specific validation
    if (deliveryMethod === "shipment") {
      if (!shipAddress || !shipCity || !shipState || !shipZip || !cardName || !cardNumber || !expDate || !cvv || !billingZip || !billingAddress) {
        setError("Please complete all Shipping and Billing fields.");
        return;
      }
    }

    if (deliveryMethod === "pickup") {
      if (!cardName || !cardNumber || !expDate || !cvv || !billingZip || !billingAddress) {
        setError("Please complete all Billing fields.");
        return;
      }
    }

    setError("");
    navigate("/order");
  };

  // Example autofill handler for shipping fields with main info
  const handleAutofill = () => {
    setShipAddress(address);
    setShipCity(city);
    setShipState(stateValue);
    setShipZip(zip);
  };

  return (
    <>
      <div className="checkout-grid">
        <div className="form-section">
          {/* Assuming you have a route /order-review */}
          <Link to="/order-review" className="back-link">BACK TO ORDER REVIEW</Link>
          <h1 className="purchasepara">My Information</h1>
          <hr />
          <form>
            <input
              type="email"
              placeholder="Email address"
              className="inputs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="inputs"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              className="inputs"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="row check1">
              <input
                type="text"
                placeholder="City"
                className="inputs-small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                className="inputs-small"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="inputs-small"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
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
                By shipment
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  checked={deliveryMethod === "pickup"}
                  onChange={() => setDeliveryMethod("pickup")}
                />
                In person
              </label>
            </div>

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
          </form>
        </div>

        <div className="totals-container">
          <h3 className="totals-title" style={{ textAlign: 'center' }}>Order Total</h3>
          <hr />
          <div className="totals-details">
            <div className="d-flex justify-content-between"><p>Subtotal</p><p>$100.00</p></div>
            <div className="d-flex justify-content-between"><p>Sales Tax</p><p>$5.00</p></div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="totals-final"><b>Total</b></p>
              <p className="totals-amount"><b>$109.50</b></p>
            </div>
          </div>

          <button type="button" className="btn totals-button btn-dark" onClick={handlePurchase}>
            PURCHASE
          </button>
        </div>
      </div>

      {deliveryMethod === "shipment" && (
        <div className="payment-container mb-5">
          <div className="section">
            <div className="section-header">
              <h2 className="checktext">Shipping Details</h2>
              {/* This is an action, so button is appropriate */}
              <button type="button" className="autofill-link" onClick={handleAutofill}>
                Autofill with My Information
              </button>
            </div>
            <input
              type="text"
              placeholder="Shipping address"
              className="inputs"
              value={shipAddress}
              onChange={(e) => setShipAddress(e.target.value)}
            />
            <div className="row check1">
              <input
                type="text"
                placeholder="City"
                className="inputs-small"
                value={shipCity}
                onChange={(e) => setShipCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                className="inputs-small"
                value={shipState}
                onChange={(e) => setShipState(e.target.value)}
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="inputs-small"
                value={shipZip}
                onChange={(e) => setShipZip(e.target.value)}
              />
            </div>
          </div>
          <div className="checksection">
            <h2 className="checktext">Billing Information</h2>
            <input
              type="text"
              placeholder="Name on Card"
              className="inputs-small1"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Debit / Credit Card Number"
              className="inputs-small1 ms-3"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="row check1">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                className="inputs-small"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                className="inputs-small"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="inputs-small"
                value={billingZip}
                onChange={(e) => setBillingZip(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Billing Address"
              className="inputs"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
            <p className="same-address">Same as Shipping Address</p>
          </div>
        </div>
      )}

      {deliveryMethod === "pickup" && (
        <div className="pickup-container mb-5">
          <div className="pickup-section">
            <div className="header">
              <h2>Pickup Location</h2>
              {/* Assuming /pickup-locations is a valid route */}
              <Link to="/pickup-locations" className="change-location">Choose a different location</Link>
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
            <input
              type="text"
              placeholder="Name on Card"
              className="inputs"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Debit / Credit Card Number"
              className="inputs"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="row check1">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                className="inputs-small"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                className="inputs-small"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="inputs-small"
                value={billingZip}
                onChange={(e) => setBillingZip(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Billing Address"
              className="inputs"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
