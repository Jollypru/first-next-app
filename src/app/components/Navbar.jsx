
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React from 'react';

const Navbar = async() => {
    const { isAuthenticated, getUser  } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user =await getUser();
    console.log(user);

    return (
        <div className='bg-slate-200 p-4 md:px-8'>
            <nav className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>MockNext</h1>

                <div>
                    <ul className='flex gap-3 md:gap-5 text-xl'>
                        <li className='hover:underline'><Link href='/'>Home</Link></li>
                        <li className='hover:underline'><Link href='/profile' >Profile</Link></li>
                    </ul>
                </div>
                {
                    isUserAuthenticated ?
                        <div className='flex items-center md:gap-8'>
                            <span className='hidden md:flex md:text-xl'>Welcome, {user?.given_name || 'User'}</span>
                           <button className='btn bg-sky-600 py-1 px-3 text-white'> <LogoutLink>Logout</LogoutLink></button>
                        </div> :
                        <div>
                            <button className='bg-sky-600 py-1 px-3 mr-4 text-white'><LoginLink>Sign in</LoginLink></button>
                            <button className='bg-sky-600 py-1 px-3 text-white'><RegisterLink>Sign up</RegisterLink></button>
                        </div>
                }
            </nav>
        </div>
    );
};

export default Navbar;