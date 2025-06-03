import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../App'
function Earrings() {
    const { categories } = useContext(productContext)
    return (
        <div>
            <div className="container-fluid bracelets">
                <p className='brace-head'>Earrings</p>
                <p className='brace-para'>Lorem ipsum dolor sit amet.</p>
                <div className="container sort-by">
                    <p id='sorts'>SORT BY:</p>
                    <p>Popularity</p>
                    <p>Type</p>
                    <p>Gemstone</p>
                    <p>Price</p>
                </div>
                <hr />
                <div className="container my-5">
                    <div className="row d-flex flex-wrap justify-content-start mb-5">
                        {categories
                            .filter((_, index) => index >= 5 && index <= 9)
                            .slice(0, 4)
                            .map((data) => (
                                <div key={data.id} className="col-md-3 col-sm-6 mb-4">
                                    <Link to={`/AddInfo/${data.id}`} className="looping-link">
                                        <div className="card brace-card" style={{ backgroundColor: "#F9F8F8" }}>
                                            <img src={data.img} className="card-img-top" alt={data.title} />
                                            <div className="card-body body-card">
                                                <h6 className="brace-title">{data.title}</h6>
                                                <p className="card-text">${data.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                    <div className="row d-flex flex-wrap justify-content-center mt-5">
                        {categories
                            .filter((_, index) => index >= 30 && index <= 32)
                            .slice(0, 3)
                            .map((data) => (
                                <div key={data.id} className="col-md-3 col-sm-6 mb-4">
                                    <Link to={`/AddInfo/${data.id}`} className="looping-link">
                                        <div className="card brace-card" style={{ backgroundColor: "#F9F8F8" }}>
                                            <img src={data.img} className="card-img-top" alt={data.title} />
                                            <div className="card-body body-card">
                                                <h6 className="brace-title">{data.title}</h6>
                                                <p className="card-text">${data.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earrings