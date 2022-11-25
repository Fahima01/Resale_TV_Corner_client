import React from 'react';

const OrderPlaceModal = ({ palceOrder }) => {
    const { title, price, seller, location } = palceOrder
    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="orderPlace-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="orderPlace-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    );
};

export default OrderPlaceModal;