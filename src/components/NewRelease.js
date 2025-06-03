import React, { useContext } from 'react'
import { productContext } from '../App'
import { Link } from 'react-router-dom'
function NewRelease() {

    const { categories } = useContext(productContext)


    return (
        <>
            <div className="container-fluid new-bg">
                <div className='new-contents'>
                    <p id='fall'>FALL RELEASE</p>
                    <p className='autumn'>the autumn equinox</p>
                    <p className='equinox'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</b></p>
                </div>
            </div>
            <div className="container-fluid categories mb-5">
                <div className="categories-row mt-5">
                    <div className="categories-title">
                        <p className='necklaceces-cate'>Necklaces</p>
                        <p className='new-begin'>With new beginnings come more pendants.</p>
                    </div>
                    <div className="categories-button">
                        <Link to={'/necklaces'} ><button type='button' className='btn btn-outline-dark shop-all-neck'>SHOP ALL NECKLACES</button></Link>
                    </div>
                </div>
                <div className="jewels-row">
                    {categories.map((data, index) => {
                        if (index >= 0 && index <= 4) {
                            return (
                                <Link to={`/AddInfo/${data.id}`} className="looping-link" key={data.id}>
                                    <div className="card-container">
                                        <div className="card jewels-card">
                                            <img src={data.img} className="card-img-top" alt={data.title} />
                                            <div className="card-body">
                                                <h6 className="card-title">{data.title}</h6>
                                                <p className="card-text">${data.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                    })}
                </div>

                <hr />
                <div className="categories-row mt-5">
                    <div className="categories-title">
                        <p className='necklaceces-cate'>Earrings</p>
                        <p className='new-begin'>Adorn your ears with the new atmosphere.</p>
                    </div>
                    <div className="categories-button">
                        <Link to={'/earrings'} ><button type='button' className='btn btn-outline-dark shop-all-neck'>SHOP ALL EARRINGS</button></Link>
                    </div>
                </div>
                <div className="jewels-row mb-5">
                    {categories.map((data, index) => {
                        if (index >= 5 && index <= 9) {
                            return <Link to={`/AddInfo/${data.id}`} className='looping-link'>
                                <div key={data.id} className="col-md-2 col-sm-6 mb-4">
                                    <div className="card jewels-card">
                                        <img src={data.img} className="card-img-top" alt={data.title} />
                                        <div className="card-body">
                                            <h6 className="card-title">{data.title}</h6>
                                            <p className="card-text">${data.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                    })}
                </div>

            </div>
        </>
    )
}

export default NewRelease