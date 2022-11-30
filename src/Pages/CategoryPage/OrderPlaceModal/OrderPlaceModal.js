import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const OrderPlaceModal = ({ palceOrder, setPlaceOrder }) => {
    const { title, price } = palceOrder
    const { user } = useContext(AuthContext)

    const handleOrderPlace = event => {
        event.preventDefault();
        const form = event.target;
        const place = form.place.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            meetPlace: place,
            buyer: name,
            product: title,
            price,
            email,
            phone,
        }
        console.log(booking)


        fetch('https://assingment-12-server-nu.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setPlaceOrder(null)
                    toast.success('Booking placed successfully')
                }
            })



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
                        <input type="text" disabled value={title} className="input w-full input-bordered " />
                        <label>Price:</label>
                        <input type="number" name='price' disabled value={price.
                            sell_price} className="input w-full input-bordered " />
                        <input name="name" type="text" required placeholder="Your Name" className="input w-full input-bordered" />


                        <input name="place" type="text" required placeholder="Your location" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
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