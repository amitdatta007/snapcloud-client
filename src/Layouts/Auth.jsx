import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='min-h-[100vh] bg-red-300'>
            <Outlet />
        </div>
    );
};

export default Auth;