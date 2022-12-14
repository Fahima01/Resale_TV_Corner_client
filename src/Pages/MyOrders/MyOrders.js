import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


const MyOrders = () => {
    const { user } = useContext(AuthContext);


    const { data: bookings = [], loading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {

            try {
                const res = await fetch(`https://assingment-12-server-nu.vercel.app/bookings?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }

        //     const res = await fetch(url, {
        //         headers: {
        //             authorization: `bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     });

        //     const data = await res.json();
        //     return data;
        // }

    })
    if (loading) {
        return <div className="flex flex-row space-x-4">
            <div className="w-5 h-5 rounded-full text-center animate-spin 
border-2 border-red-700 border-t-transparent"></div></div>;
    }

    return (
        <div>
            <h3 className='text-3xl font-bold text-violet-900 my-7 '>MyOrders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product Details</th>
                            <th>Buyer Details</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th> {i + 1}
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">{booking.product}</div>
                                            <div className="text-sm  font-bold text-green-300">Price: ${booking.price}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.buyer}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Phone:{booking.phone}</span>
                                </td>
                                <td>{booking.meetPlace}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Proceed</button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;