import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderPlaceModal from './OrderPlaceModal/OrderPlaceModal';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const products = useLoaderData([])
    const [palceOrder, setPlaceOrder] = useState(null)
    return (
        <div >
            <h2 className='text-center text-4xl font-bold mt-14 mb-10'>Choose Your Desire Product</h2>
            <div className='flex mx-auto justify-center items-center'>

                <div className='grid grid-cols-1 gap-8'>

                    {
                        products.map(product => <ProductCard
                            key={product.id}
                            product={product}
                            setPlaceOrder={setPlaceOrder}
                        ></ProductCard>)
                    }
                </div>
            </div>
            {palceOrder &&
                <OrderPlaceModal
                    palceOrder={palceOrder}
                ></OrderPlaceModal>}
        </div>
    );
};

export default CategoryPage;