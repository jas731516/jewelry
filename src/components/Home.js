import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import image from "./../images/bg1.png";
import { productContext } from "../App";

const Home = () => {
    const { categories } = useContext(productContext);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: "ease-in-out",
            once: true, 
            disable: "mobile", 
        });
        setTimeout(() => {
            AOS.refreshHard();
        }, 500); 
    }, []);

    const handleCategoryClick = (topic) => {
        const formattedTopic = topic.toLowerCase();
        navigate(`/${formattedTopic}`);
    };

    return (
        <>
            <section>
                <div className="hero-container" data-aos="fade-up">
                    <img src={image} alt="Autumn Equinox" className="background-image" />
                    <div className="overlay"></div>
                    <div className="text-container">
                        <p className="title1">the autumn equinox</p>
                        <p className="subtitle">Fall has arrived.<br />Shop for our new releases starting today.</p>
                        <Link to="/NewRelease"><button className="shop-button">SHOP NOW</button></Link>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-center" data-aos="fade-up">Shop by category</p>
                <p className="text-center" data-aos="fade-up">Indulge in what we offer.</p>
                <div className="container mt-4 d-flex justify-content-center">
                    <div className="row justify-content-center">
                        {categories.map((data, index) => {
                            if (index >= 10 && index <= 14) {
                                return (
                                    <div
                                        key={index}
                                        className="col-6 col-md-4 col-lg-2 text-center mb-3"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleCategoryClick(data.topic)}
                                        data-aos="zoom-in"
                                    >
                                        <div className="category-card">
                                            <img
                                                src={data.img}
                                                alt={data.title}
                                                className="category-image img-fluid"
                                            />
                                            <p className="category-name mt-2">{data.topic}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className="container face1">
                    <div className="row g-0" id="about1">
                        <div className="col-md-6" id="image1" data-aos="fade-right">
                            <img src={require("./../images/about1.png")} height="100%" width="100%" alt="pic1" />
                        </div>
                        <div className="col-md-6 abt1 pt-5" data-aos="fade-left">
                            <p>ARTICLE  •  OCTOBER  2022</p><br /><br /><br />
                            <h3>During the golden hour.</h3><br />
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. </p>
                            <p>Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac.</p>
                            <button className="learn-more mb-5">READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container face3 p-0">
                    <div className="row g-0">
                        <div className="col-md-6" id="gift" data-aos="fade-right">
                            <h3>Gifts of the season</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis.</p>
                            <button className="shop-button2">
                                <Link to="/gift">SHOP GIFTS</Link>
                            </button>
                        </div>
                        <div className="col-md-6" id="image2" data-aos="fade-left">
                            <img src={require("./../images/about2.jpg")} height="100%" width="100%" alt="picture2" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container face1">
                    <div className="row g-0" id="about1">
                        <div className="col-md-6" id="image1" data-aos="fade-right">
                            <img src={require("./../images/about3.jpg")} height="100%" width="100%" alt="pic1" />
                        </div>
                        <div className="col-md-6 abt1 d-flex flex-column justify-content-center" data-aos="fade-left">
                            <h3>What were we made for?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. </p>
                            <p>Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac. </p>
                            <button className="learn-more mb-3">ABOUT US</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
