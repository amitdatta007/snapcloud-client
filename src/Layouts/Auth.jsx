import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from '../Pages/AuthNav/AuthNav';

const Auth = () => {
    return (
        <div className='min-h-[100vh]'>
            <AuthNav />
            <Outlet />
        </div>
    );
};

export default Auth;