import React, { useState } from 'react';
import {BsApple, BsGoogle} from 'react-icons/bs';
import {RiUserSmileLine, RiCalendarLine} from 'react-icons/ri';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BiShow, BiHide, BiLockAlt} from 'react-icons/bi';
import {TbGenderMale} from 'react-icons/tb'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [passShow, setPassShow] = useState('password');

    const handlePassVisibility = () => {
        if(passShow === 'password'){
            setPassShow('text');
        };
        if(passShow === 'text'){
            setPassShow('password')
        };
    };



    return (
        <div className='min-h-[calc(100vh-56px)] flex justify-center items-center px-2 py-6'>
            <div className='w-full max-w-[500px] flex flex-col gap-3'>
                <div>
                    <h2 className='text-4xl font-bold text-center'>Getting Started</h2>
                    <p className='font-semibold text-center'>Create an account to continue and connect with the people.</p>
                </div>
                <div className='flex gap-6 pt-8'>
                    <button className='flex flex-col sm:flex-row justify-center items-center font-semibold bg-base-300 w-full px-2 py-3 rounded-md gap-2 sm:gap-6 hover:bg-secondary hover:text-base-300'>
                        <BsGoogle />
                        <span>Log in with Google</span>
                    </button>
                    <button className='flex flex-col sm:flex-row justify-center items-center font-semibold bg-base-300 w-full px-2 py-3 rounded-md gap-2 sm:gap-6 hover:bg-secondary hover:text-base-300'>
                        <BsApple />
                        <span>Log in with Apple</span>
                    </button>
                </div>
                <div className="divider font-bold">OR</div>
                <form className='flex flex-col gap-6'>
                    <div className='w-full border-[2px] border-border flex items-center px-4 py-3 rounded-md font-semibold gap-3'>
                        <RiUserSmileLine className='text-[1.6rem]' />
                        <input type="text" name='name' placeholder='Your Name' className='w-full border-none bg-transparent focus:outline-none placeholder:text-info-content'/>
                    </div>
                    <div className='w-full border-[2px] border-border flex items-center px-4 py-3 rounded-md font-semibold gap-3 '>
                        <MdOutlineAlternateEmail className='text-[1.6rem]' />
                        <input type="email" name='email' placeholder='Your Email' className='w-full border-none bg-transparent focus:outline-none placeholder:text-info-content'/>
                    </div>
                    <div className='w-full border-[2px] border-border flex items-center px-4 py-3 rounded-md font-semibold gap-3'>
                        <BiLockAlt className='text-[1.6rem]' />
                        <input type={passShow} name='password' placeholder='Create Password' className='w-full border-none bg-transparent focus:outline-none placeholder:text-info-content'/>
                        <span onClick={handlePassVisibility} >
                            {
                                passShow === 'password' && <BiShow className='text-[1.4rem]'/>  
                            }
                            {
                                passShow === 'text' && <BiHide className='text-[1.4rem]'/>
                            }
                        </span>
                    </div>
                    <div className='flex gap-6'>
                        <div className='w-full border-[2px] border-border flex items-center px-4 py-3 rounded-md font-semibold gap-3'>
                            <RiCalendarLine className='text-[1.3rem]' />
                            <span className='text-info-content'>Date of Birth</span>
                        </div>
                        <div className='w-full border-[2px] border-border flex items-center px-4 py-3 rounded-md font-semibold gap-3'>
                            <TbGenderMale className='text-[1.6rem]' />
                            <input type="radio" name="radio-2" value='male' className="" checked />
                            <span>Male</span>
                            <input type="radio" name="radio-2" value='female' className="" />
                            <span>Female</span>
                        </div>
                    </div>
                    <button type="submit" className='bg-primary w-full px-4 py-3 rounded-md font-semibold border-[2px] border-primary text-base-100 hover:bg-base-100 hover:text-primary'>Create Account</button>
                </form>
                <p className='font-semibold text-center'>Already have an account? <Link className='text-primary' to='/signin'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;SignUp