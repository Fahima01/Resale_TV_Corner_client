
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal';



const ManageAddProducts = () => {
    const [deleteAddproduct, setDeleteAddproduct] = useState(null)

    const closeModal = () => {
        setDeleteAddproduct(null)
    }


    const { data: addproducts, isLoading, refetch } = useQuery({
        queryKey: ['productsadd'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/productsadd', {
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
    });

    const handleDeleteDoctor = (addproduct) => {
        fetch(`http://localhost:5000/productsadd/${addproduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deleteAddproduct > 0) {
                    refetch();
                    toast.success('Product Delete Successfully')
                }
            })
    }


    if (isLoading) {
        return <div className="flex flex-row space-x-4">
            <div className="w-5 h-5 rounded-full text-center animate-spin items-center
border-2 border-red-700 border-t-transparent"></div></div>
    }
    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-white">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            addproducts?.map((addproduct, i) => <tr key={addproduct._id}>
                                <th >
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" w-32 h-24 rounded">
                                                <img src={addproduct.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{addproduct.name}</div>
                                            <div className="text-sm opacity-50"> TK {addproduct.price} </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {addproduct.seller}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{addproduct.phone} </span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm"> {addproduct.location} </span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm"> {addproduct.category} </span>
                                </td>
                                <td>
                                    <label onClick={() => setDeleteAddproduct(addproduct)} htmlFor="confirmation-modal" className="btn btn-danger bg-red-500 btn-xs border-none">Delete</label>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteAddproduct &&

                <ConfirmationModal
                    title={`Sure want to delete ${deleteAddproduct.name}`}
                    mesagse={'If you delete it will never undone'}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalData={deleteAddproduct}
                    successBtnName="Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageAddProducts;