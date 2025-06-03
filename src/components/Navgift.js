import { Link } from "react-router-dom";
const MegaMenu1 = ({ isOpen, onClose }) => {
    return (
        <div className={`mega-menu ${isOpen ? "open" : ""}`}>
            <div className="mega-menu-content">
                <div className="column">
                    <h4>Categories</h4>
                    <ul>
                        <li>
                            <Link to="/gift" onClick={onClose}>All Gifts</Link>
                        </li>
                        <li>$100 and Under</li>
                        <li>$200 - $300</li>
                        <li>$300 and More</li>
                        <li>For Him</li>
                        <li>For Her</li>
                        <li>For Them</li>
                    </ul>
                </div>
                {/* <div className="column">
                    <h4>Extra 1</h4>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Dolor sit</li>
                        <li>Amet c</li>
                        <li>Adipiscing elit</li>
                        <li>Sed do</li>
                    </ul>
                </div>
                <div className="column">
                    <h4>Extra 2</h4>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Dolor sit</li>
                        <li>Amet c</li>
                        <li>Adipiscing elit</li>
                        <li>Sed do</li>
                    </ul>
                </div>
                <div className="column">
                    <h4>Extra 3</h4>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Dolor sit</li>
                        <li>Amet c</li>
                        <li>Adipiscing elit</li>
                        <li>Sed do</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default MegaMenu1;