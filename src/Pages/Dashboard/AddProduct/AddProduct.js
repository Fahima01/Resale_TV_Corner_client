import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    //console.log(imageHostKey)

    const handleProductUpload = data => {
        //console.log(data.image[0])
        const image = data.image[0]
        const formdata = new FormData
        formdata.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success)
                    console.log(imgData.data.url);
                const uploadProducts = {
                    name: data.name,
                    email: data.email,
                    promote: data.ad,
                    location: data.location,
                    usage: data.usage,
                    image: imgData.data.url



                }
            })

    }
    return (
        <div className='w-96 p-7 bg-violet-400 mx-auto rounded-lg mb-32 mt-5'>
            <h2 className='text-violet-800 font-bold text-xl text-center'>Add product</h2>
            <form onSubmit={handleSubmit(handleProductUpload)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product name:</span></label>
                    <input type="text" {...register("name", {
                        required: "name is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Add location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product usage:</span></label>
                    <input type="text" {...register("usage", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.usage && <p className='text-red-600'>{errors.usage.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Wants to advertise it? </span></label>
                    <select type="select" {...register("ad", {
                        required: true
                    })} className="select w-full max-w-xs text-cyan-400">
                        <option>No Advertise</option>
                        <option>Advertise</option>
                    </select>
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

//fa239f97c5ab5d5970340469c4a0a67b// image bb api