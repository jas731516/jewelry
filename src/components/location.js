import { Link } from "react-router-dom";
import React from "react";

const MegaMenu3 = ({ isOpen, onClose }) => {
    return (
        <div className={`mega-menu1 ${isOpen ? "open" : ""}`}>
            <div className="container mega-menu-content">
                <div className="column">
                    <h4>Main Locations</h4>
                    <ul>
                        <li>
                            <Link to="/necklaces" onClick={onClose}>Necklaces</Link>
                        </li>
                        <li><Link to="/Earrings" onClick={onClose}>San Francisco, CA</Link></li>
                        <li><Link to="/Bracelets" onClick={onClose}>New York, NY</Link></li>
                        <li><Link to="/rings" onClick={onClose}>Seattle, WA</Link> </li>


                    </ul>
                </div>
                <div className="column"style={{marginLeft:"10%"}}>
                    <h4>Find nearest stores</h4>
                    <div className="search-container">
                        <input type="text" placeholder="City / State / ZIP" className="search-input" />
                        <span className="search-icon">🔍</span>
                    </div>
                </div>
                <div className="column"style={{marginLeft:"10%"}}>
                    <img src={require("./../images/map.jpg")} alt="" width="80%" height="70%" style={{objectFit:"cover"}}/>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu3;