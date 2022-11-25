import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategoryCard from './ProductCategoryCard';

const ProductCategory = () => {
    const [categrories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product-categories/`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='h-screen mt-20' >
            <h2 className='text-4xl text-center my-10'>Select TV Brand</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center mx-12">
                {
                    categrories.map(category => <ProductCategoryCard
                        key={category.cat_id}
                        category={category}
                    ></ProductCategoryCard>
                    )
                }

            </div>
            {/* {
                    categrories.map(category =>
                        <div className='bg-red-400'
                        key={category.cat_id}>
                        <Link to={`/categories/${category.cat_id}`}>{category.name}</Link>

                    </div>)
                } */}
        </div>
    );
};

export default ProductCategory;