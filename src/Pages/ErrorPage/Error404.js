import React from 'react';
import { Link } from 'react-router-dom';
import Errorimg from '../../assets/404 page/err-3.png';

const Error404 = () => {
    return (
        <div className='h-screen w-full'>
            <div className='w-3/4 mx-auto flex justify-center items-center'>
                <img src={Errorimg} alt='/'></img>
            </div>
            <p className='text-5xl font-bold text-center'>Opps! Page Not Found</p>
            <div className='flex justify-center mt-9 items-center'>
                <Link to='/'><button className="btn btn-active btn-primary">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error404;