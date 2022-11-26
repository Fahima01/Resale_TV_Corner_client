import React from 'react';
import toast from 'react-hot-toast';

const OrderPlaceModal = ({ palceOrder, setPlaceOrder }) => {
    const { title, price, seller, location } = palceOrder

    const handleOrderPlace = event => {
        event.preventDefault();
        const form = event.target;
        const place = form.place.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            meetPlace: place,
            buyer: name,
            product: title,
            email,
            phone,
        }
        console.log(booking)
        setPlaceOrder(null)
    }

    return (

        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="orderPlace-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="orderPlace-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product: {title}</h3>
                    <form onSubmit={handleOrderPlace} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={''} className="input w-full input-bordered " />
                        <input name="name" type="text" required placeholder="Your Name" className="input w-full input-bordered" />


                        <input name="place" type="text" required placeholder="Your location" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={''} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" required type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderPlaceModal;