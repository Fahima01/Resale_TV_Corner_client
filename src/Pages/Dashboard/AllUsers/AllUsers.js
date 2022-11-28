import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h3 className='text-3xl font-bold text-violet-900 my-7 '>All users</h3>
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
                    <tbody >
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th className='text-pink-400 ml-3'> {i + 1}
                                    {/* <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label> */}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-semibold text-lg text-white">{user.name}</div>
                                            <div className="text-sm  font-bold text-green-300">Price: ${user.price}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.buyer}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Phone:{user.phone}</span>
                                </td>
                                <td>{user.meetPlace}</td>
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

export default AllUsers;