import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/snapCloud-logo.png';

const AuthNav = () => {
    return (
        <div className='p-4 flex justify-between'>
            <Link to={'/'} className='flex items-center gap-1'>
                <img src={logo} alt="" className='h-6' />
                <h2 className='text-[1.3rem] leading-[1.4rem] font-bold text-base-content'>Snapcloud</h2>
            </Link>
        </div>
    );
};

export default AuthNav;