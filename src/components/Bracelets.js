import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../App'
function Bracelets() {
    const {categories} = useContext(productContext)
  return (
    <div>
        <div className="container-fluid bracelets">
            <p className='brace-head'>Bracelets</p>
            <p className='brace-para'>Lorem ipsum dolor sit amet.</p>
            <div className="container sort-by">
                <p id='sorts'>SORT BY:</p>
                <p>Popularity</p>
                <p>Type</p>
                <p>Gemstone</p>
                <p>Price</p>
            </div>
            <hr/>
            <div className="brace-row my-5">
                    {categories.map((data, index) => {
                        if (index >= 15 && index <= 19) {
                            return <Link to={`/AddInfo/${data.id}`} className='looping-link'>
                            <div key={data.id} className="col-md-2 col-sm-6 mb-4" >
                                <div className="card brace-card" style={{backgroundColor:'#F9F8F8'}}>
                                    <img src={data.img} className="card-img-top" alt={data.title} />
                                    <div className="card-body body-card">
                                        <h6 className="brace-title">{data.title}</h6>
                                        <p className="card-text">${data.price}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        }
                    })}
                </div>
        </div>
    </div>
  )
}

export default Bracelets