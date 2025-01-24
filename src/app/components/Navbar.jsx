
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
        <div className='bg-slate-200 p-4 px-8'>
            <nav className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl'>MockNext</h1>
                <div>
                    <ul className='flex gap-5'>
                        <li className='hover:underline'><Link href='/'>Home</Link></li>
                        <li className='hover:underline'><Link href='/profile' >Profile</Link></li>
                    </ul>
                </div>
                {
                    isUserAuthenticated ?
                        <div className='flex items-center gap-8'>
                            <span>Welcome, {user?.given_name || 'User'}</span>
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