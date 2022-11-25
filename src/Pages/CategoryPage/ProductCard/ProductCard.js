import React from 'react';

const ProductCard = ({ product, setPlaceOrder }) => {
    const { title, image_url, price, seller, location } = product
    return (
        <div className="card border-2  border-x-teal-400 lg:card-side shadow-xl">
            <figure className='bg-white'><img src={image_url} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-pink-300 text-2xl mb-6">{title}</h2>
                <div className='flex text-xl text-teal-400'>
                    <p>Buying price: ${price.original}</p>
                    <p>Selling price: ${price.sell_price}</p>
                </div>
                <div className='flex'>
                    <p>Post on: {seller.published_date}</p>
                    <p>Used for: {price.used}</p>
                </div>
                <p>Location: {location}</p>
                <div className="card-actions justify-between">
                    <div className="avatar">
                        <div>
                            <p className='font-bold'>Seller Name: <span className='text-teal-400'>{seller.name}</span> </p>
                        </div>
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