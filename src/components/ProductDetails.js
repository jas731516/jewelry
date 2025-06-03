import React, { useContext, useState, useEffect } from "react";
import { ShoppingBagContext, WishlistContext, productContext } from "../App";
import { Link, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function ProductDetails() {
    const { shoppingBag, setShoppingBag } = useContext(ShoppingBagContext);
    const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
    const { categories } = useContext(productContext);
    const { id } = useParams();
    const findProduct = categories?.find(item => item.id == id) || {};
    const [isAdded, setIsAdded] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    useEffect(() => {
        if (findProduct?.id) {
            setIsWishlisted(wishlistItems.some(item => item.id === findProduct.id));
        }
    }, [findProduct, wishlistItems]);
    const handleAddToBag = () => {
        const isProductInBag = shoppingBag.some(item => item.id === findProduct.id);

        if (!isProductInBag) {
            setShoppingBag([...shoppingBag, findProduct]);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        }
    };
    const handleWishlistClick = () => {
        if (isWishlisted) {
            setWishlistItems(wishlistItems.filter(item => item.id !== findProduct.id));
        } else {
            setWishlistItems([...wishlistItems, findProduct]);
        }
        setIsWishlisted(!isWishlisted);
    };
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="container-fluid card mb-3 mt-5" style={{ border: "none", padding: "0px 7% 70px 7%" }}>
                <div className="row g-1 mt-5" id="products">
                    <div className="col-md-5">
                        <img src={findProduct.img} className="img-fluid rounded-start" alt="Product" style={{ width: "500px", height: "550px" }} />
                    </div>
                    <div className="col-md-7 card-content">
                        <div className="card-body">
                            <Link className="back-to" to="/NewRelease">BACK TO SELECTION</Link>
                            <div className="card-sec">
                                <div>
                                    <h5 className="card-title tittle-card">{findProduct.title}</h5>
                                    <p id="card-price">${findProduct.price}</p>
                                </div>
                                <div>
                                    <CiHeart
                                        style={{ width: "25px", height: "25px", cursor: "pointer", color: isWishlisted ? "red" : "black" }}
                                        onClick={handleWishlistClick}
                                    />
                                </div>
                            </div>
                            <p className="card-text pt-3">{findProduct.tittle}</p>
                            <button
                                type="button"
                                className={`btn card-addto-bag ${isAdded ? "btn-added" : "btn-default"}`}
                                onClick={handleAddToBag}
                            >
                                {isAdded ? "ADDED" : "ADD TO BAG"}
                            </button>
                            <div className="accordion-container">
                                {findProduct.accordionData?.map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                            {item.title}
                                            <span className={`icon ${activeIndex === index ? "rotate" : ""}`}>
                                                {!item.icon ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                                    </svg>
                                                ) : item.icon}
                                            </span>
                                        </button>
                                        {activeIndex === index && (
                                            <div className="accordion-content">
                                                {item.title === "LOCAL AVAILABILITY" ? (
                                                    <div className="store-availability">
                                                        <div className="d-flex justify-content-between align-items-start local-avail" style={{ gap: "60px" }}>
                                                            <div className="store-search">
                                                                <p>Look up nearby stores:</p>
                                                                <div className="search-box">
                                                                    <input type="text" placeholder="City / State / ZIP" />
                                                                    <span className="search-icon">🔍</span>
                                                                </div>
                                                            </div>
                                                            <div className="store-details">
                                                                <p><strong>MARIGOLD MALL</strong></p>
                                                                <p>13 Greenleaf Ave.</p>
                                                                <p>New York, NY 12345</p>
                                                                <p className="pickup-info">Pickup Available from 8 AM to 7 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <ul>
                                                        <li>{item.content?.content1}</li>
                                                        <li>{item.content?.content2}</li>
                                                        <li>{item.content?.content3}</li>
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ marginTop: "60px" }} />
                <div className="row">
                    <p id="recommended">Recommended for you</p>
                    <p id="history">Based on your history</p>
                    <div className="jewels-row">
                        {categories?.slice(0, 5).map(data => (
                            <Link to={`/AddInfo/${data.id}`} className="looping-link" key={data.id}>
                                <div className="col-md-2 col-sm-6 mb-4">
                                    <div className="card jewels-card">
                                        <img src={data.img} className="card-img-top" alt={data.title} />
                                        <div className="card-body">
                                            <h6 className="card-title">{data.title}</h6>
                                            <p className="card-text">{data.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
