import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleAdminRole = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Created Succesfully.')
                    refetch();
                }

            })

    }

    return (
        <div>
            <h3 className='text-3xl font-bold text-violet-900 my-7 '>All users</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead className='text-white'>
                        <tr>
                            <th>

                            </th>
                            <th>User Details</th>
                            <th>Email</th>
                            <th></th>
                            <th>Action</th>
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
                                            <div className="font-semibold text-lg text-white">Name: {user.name}</div>
                                            <div className="text-sm  font-bold text-green-300">Position: {user.status}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.buyer}
                                    <br />
                                    <span className="badge badge-ghost badge-sm"> {user.email}</span>
                                </td>
                                <td>
                                    {user?.role !== 'admin' && <button onClick={() => handleAdminRole(user._id)} className="btn bg-green-400 btn-xs px-5 text-black">Make Admin</button>}
                                </td>

                                <th>
                                    <button className="btn btn-primary bg-red-400 btn-xs">Delete</button>
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