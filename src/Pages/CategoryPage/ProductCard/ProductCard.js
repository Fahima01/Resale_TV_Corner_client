import React from 'react';

const ProductCard = ({ product, setPlaceOrder }) => {
    const { title, image_url, price, seller, location } = product
    return (
        <div className="card pb-0 border-b-4 bg-indigo-900  border-x-teal-400 lg:card-side shadow-xl">
            <figure className='bg-white '><img src={image_url} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-pink-300 text-2xl mb-6">{title}</h2>
                <div className='flex text-xl font-semibold text-green-400'>
                    <p>Buying price: ${price.original}</p>
                    <p>Selling price: ${price.sell_price}</p>
                </div>
                <div className='flex'>
                    <p>Post on: {seller.published_date}</p>
                    <p>Used for: {price.used}</p>
                </div>
                <div className='p-0 m-0'><p >Location: {location}</p></div>
                <div className="card-actions justify-between p-0">
                    <div className='text-xl'>
                        <p className='font-bold'>Seller Name: <span className='text-teal-400'>{seller.name}</span> </p>
                    </div>
                    <label
                        htmlFor="orderPlace-modal"
                        className="btn btn-primary font-bold text-purple-800"
                        onClick={() => setPlaceOrder(product)}

                    >Place Order</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;