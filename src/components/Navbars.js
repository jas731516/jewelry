import React, { useContext, useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { FaHeart, FaShoppingBag, FaUser, FaSearch, FaBars, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MegaMenu3 from "./location";
import MegaMenu from "./menu";
import MegaMenu1 from "./Navgift";
import { WishlistContext } from "../App";
import { ShoppingBagContext } from "../App";
import ShoppingBag from "./ShoppingBag";

const Navbars = () => {
  useEffect(() => {
    const handleScroll = () => {
      setExpanded(false);
      setShowMegaMenu(false); 
      setShowMegaMenu1(false);
      setShowMegaMenu3(false);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { shoppingBag } = useContext(ShoppingBagContext);
  const { wishlistItems } = useContext(WishlistContext);

  const [expanded, setExpanded] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMegaMenu1, setShowMegaMenu1] = useState(false);
  const [showMegaMenu3, setShowMegaMenu3] = useState(false);
  const [isSignup] = useState(false); // Removed setIsSignup to fix ESLint warning
  const [showModal, setShowModal] = useState(false);

  const megaMenuRef = useRef(null);
  const megaMenu1Ref = useRef(null);
  const megaMenu3Ref = useRef(null);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const handleScroll = () => setExpanded(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current && !megaMenuRef.current.contains(event.target) &&
        megaMenu1Ref.current && !megaMenu1Ref.current.contains(event.target) &&
        megaMenu3Ref.current && !megaMenu3Ref.current.contains(event.target)
      ) {
        setShowMegaMenu(false);
        setShowMegaMenu1(false);
        setShowMegaMenu3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar expand="lg" expanded={expanded} className="navbar-custom">
      <Container fluid className="justify-content-between">
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)}>
          <FaBars className="nav-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <FaMapMarkerAlt className="nav-icon" onClick={() => setShowMegaMenu3(!showMegaMenu3)} />
          <Nav className="nav-links">
            <Nav.Link href="#" onClick={() => setShowMegaMenu(!showMegaMenu)}>JEWELRY</Nav.Link>
            <Nav.Link as={Link} to="/NewRelease">NEW RELEASES</Nav.Link>
            <Nav.Link href="#" onClick={() => setShowMegaMenu1(!showMegaMenu1)}>GIFTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="nav-logo">
          <Link to="/"><img src={require("./../images/logo.png")} alt="" /></Link>
        </Navbar.Brand>
        <div className="nav-icons">
          <Form className="search-box1">
            <div className="search-container1">
              <input type="text" placeholder="Search" className="search-input1" />
              <FaSearch className="search-icon1" />
            </div>
          </Form>
          <div className="favorite-container" onClick={toggleModal}>
            <FaHeart className="nav-icon" />
            <span className="badge">{wishlistItems.length}</span>
          </div>
          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "500px", width: "90%" }}>
                <div className="modal-content" style={{ width: "100%", padding: "10px" }}>
                  <div className="modal-header">
                    <h5 className="modal-title">Wishlist</h5>
                    <button type="button" className="close" onClick={toggleModal}>
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    {wishlistItems.length > 0 ? (
                      wishlistItems.reduce((rows, item, index) => {
                        if (index % 3 === 0) rows.push([]);
                        rows[rows.length - 1].push(item);
                        return rows;
                      }, []).map((row, rowIndex) => (
                        <div key={rowIndex} className="wishlist-row d-flex">
                          {row.map((item, index) => (
                            <div key={index} className="wishlist-item align-items-center" style={{ marginRight: "20px" }}>
                              <img src={item.img} alt={item.title} style={{ width: "120px", height: "140px", marginRight: "10px" }} />
                              <div>
                                <p><b>{item.title}</b></p>
                                <p>${item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))
                    ) : (
                      <p>Your wishlist is empty.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="shopping-bag-container"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <FaShoppingBag className="nav-icon" />
            {shoppingBag.length > 0 && <span className="bag-count">{shoppingBag.length}</span>}
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">In My Bag</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ShoppingBag />
            </div>
          </div>
          <FaUser className="nav-icon" data-bs-toggle="modal" data-bs-target="#authModal" />
        </div>
      </Container>
      <div ref={megaMenuRef}>
        <MegaMenu isOpen={showMegaMenu} onClose={() => setShowMegaMenu(false)} />
      </div>
      <div ref={megaMenu1Ref}>
        <MegaMenu1 isOpen={showMegaMenu1} onClose={() => setShowMegaMenu1(false)} />
      </div>
      <div ref={megaMenu3Ref}>
        <MegaMenu3 isOpen={showMegaMenu3} onClose={() => setShowMegaMenu3(false)} />
      </div>
      <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title modal-head" id="authModalLabel">
                <FaUser className="sign-icon mt-1" />
                <p>{isSignup ? "SIGN UP" : "LOG IN"}</p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navbars;
