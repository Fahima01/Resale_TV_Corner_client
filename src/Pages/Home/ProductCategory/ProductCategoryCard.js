import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategoryCard = ({ category }) => {
    const { img, name } = category

    return (
        <div className="card card-compact w-72 bg-blue-800 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand Name: {name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/categories/${category.cat_id}`}>See Products</Link>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCard;