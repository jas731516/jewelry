import { Link } from "react-router-dom";

const MegaMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`mega-menu ${isOpen ? "open" : ""}`}>
            <div className="mega-menu-content">
                <div className="column">
                    <h4>Categories</h4>
                    <ul>
                        <li>
                            <Link to="/Necklaces" onClick={onClose}>Necklaces</Link>
                        </li>
                        <li>
                            <Link to="/earrings" onClick={onClose}>Earrings</Link>
                        </li>
                        <li>
                            <Link to="/bracelets" onClick={onClose}>Bracelets</Link>
                        </li>
                        <li>
                            <Link to="/rings" onClick={onClose}>Rings</Link>
                        </li>
                        <li>
                            <Link to="/Charms" onClick={onClose}>Charms</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="column">
                    <h4>Extra 1</h4>
                    <ul>
                        <li onClick={onClose}>Lorem ipsum</li>
                        <li onClick={onClose}>Dolor sit</li>
                        <li onClick={onClose}>Amet c</li>
                        <li onClick={onClose}>Adipiscing elit</li>
                        <li onClick={onClose}>Sed do</li>
                    </ul>
                </div>
                <div className="column">
                    <h4>Extra 2</h4>
                    <ul>
                        <li onClick={onClose}>Lorem ipsum</li>
                        <li onClick={onClose}>Dolor sit</li>
                        <li onClick={onClose}>Amet c</li>
                        <li onClick={onClose}>Adipiscing elit</li>
                        <li onClick={onClose}>Sed do</li>
                    </ul>
                </div>
                <div className="column">
                    <h4>Extra 3</h4>
                    <ul>
                        <li onClick={onClose}>Lorem ipsum</li>
                        <li onClick={onClose}>Dolor sit</li>
                        <li onClick={onClose}>Amet c</li>
                        <li onClick={onClose}>Adipiscing elit</li>
                        <li onClick={onClose}>Sed do</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default MegaMenu;