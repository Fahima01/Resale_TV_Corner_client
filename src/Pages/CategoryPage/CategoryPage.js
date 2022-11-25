import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const products = useLoaderData([])
    console.log(products)
    return (
        <div >
            <h2 className='text-center text-4xl font-bold mt-14 mb-10'>Choose Your Desire Product</h2>
            <div className='flex mx-auto justify-center items-center'>

                <div className='grid grid-cols-1 gap-8'>

                    {
                        products.map(product => <ProductCard
                            key={product.id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default CategoryPage;