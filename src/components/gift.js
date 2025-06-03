import React, { useContext } from "react";
import { productContext } from "../App";

const Gift = () => {
    const { categories } = useContext(productContext);
    return (
        <>
            <h1 className='text-center pt-5'>Gift</h1>
            <p className="text-center pb-3">Lorem ipsum dolor sit amet.</p>
            <div className="container my-5">
                <div className="row justify-content-center">
                    {categories.map((data, index) => {
                        if (index >= 38 && index <= 43) {
                            return <div
                                key={data.id}
                                className="col-12 col-sm-6 col-md-4 text-center mb-4"
                                style={{ cursor: "pointer" }}>
                                <div className="category-card">
                                    <img
                                        src={data.img}
                                        alt={data.title}
                                        className="category-image1 img-fluid"
                                        id={`category-image-${data.id}`}
                                    />
                                    <p className="category-name mt-2">{data.title}</p>
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Gift;
