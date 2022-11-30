import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    //console.log(imageHostKey)
    const navigate = useNavigate()
    const handleProductUpload = data => {
        //console.log(data.image[0])
        const image = data.image[0]
        const formdata = new FormData
        formdata.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const productsadd = {
                        seller: data.seller,
                        name: data.name,
                        phone: data.number,
                        promote: data.ad,
                        category: data.category,
                        location: data.location,
                        description: data.description,
                        usage: data.usage,
                        condition: data.condition,
                        image: imgData.data.url,
                        price: data.price

                    }

                    fetch('https://assingment-12-server-nu.vercel.app/productsadd', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productsadd)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/manage-products')
                        })
                }

            })

    }
    return (
        <div className='w-full p-7 bg-violet-400 mx-auto rounded-lg mb-32 mt-5'>
            <h2 className="font-bold text-xl text-center mb-5">Add product</h2>
            <form onSubmit={handleSubmit(handleProductUpload)}>

                <div className='flex flex-col-2 gap-4'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Seller name:</span></label>
                        <input type="text" {...register("seller", {
                            required: "name is required"
                        })} className="input input-bordered w-full text-white" />
                        {errors.seller && <p className='text-red-600'>{errors.seller.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product name:</span></label>
                        <input type="text" {...register("name", {
                            required: "name is required"
                        })} className="input input-bordered w-full text-white" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                </div>

                <div className='flex flex-col-3 gap-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile No:</span></label>
                        <input type="number" {...register("number", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs text-white" />
                        {errors.number && <p className='text-red-600'>{errors.number.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Add location</span></label>
                        <input type="text" {...register("location", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs text-white" />
                        {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product usage:</span></label>
                        <input type="text" {...register("usage", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs text-white" />
                        {errors.usage && <p className='text-red-600'>{errors.usage.message}</p>}
                    </div>

                </div>

                <div className='flex flex-col-3 gap-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition </span></label>
                        <select type="select" {...register("condition", {
                            required: true
                        })} className="select w-full text-lg max-w-xs text-pink-200">
                            <option disabled selected>select</option>
                            <option>Fair</option>
                            <option>Good</option>
                            <option>Excellent</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Wants to advertise it? </span></label>
                        <select type="select" {...register("ad", {
                            required: true
                        })} className="select w-full max-w-xs text-lg text-pink-200">
                            <option disabled selected>select</option>
                            <option>No Advertise</option>
                            <option>Advertise</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select type="select" {...register("category", {
                            required: true
                        })} className="select w-full text-lg max-w-xs text-pink-200">
                            <option disabled selected>select</option>
                            <option>Sony</option>
                            <option>LG</option>
                            <option>Samsung</option>
                            <option>Nova</option>
                            <option>TLC</option>
                            <option>Panasonic</option>
                        </select>
                        {errors.category && <p className='text-red-600'>{errors.category.message}</p>}
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="number" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-white" />
                    {errors.number && <p className='text-red-600'>{errors.number.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Product Descripton:</span></label>
                    <textarea type="text" {...register("description", {
                        required: true
                    })} className="textarea textarea-bordered w-full h-28 text-white" />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Upload Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "image is requird"
                    })} className="file-input file-input-bordered file-input-primary w-full max-w-xs text-cyan-400" />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                {/* {signUpError && <p className='text-white'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddProduct;

