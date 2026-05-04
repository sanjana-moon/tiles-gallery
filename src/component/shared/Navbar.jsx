'use client'

import Link from 'next/link';
import { RxActivityLog } from 'react-icons/rx';
import logo from "@/assets/Logo.png"
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { SyncLoader } from 'react-spinners';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    const router = useRouter();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/main/allTiles'}>All Tiles</NavLink></li>
        <li><NavLink href={'/main/myProfile'}>My Profile</NavLink></li>
    </>;

    const mobileLinks = <>
        <li onClick={() => setIsMobileMenuOpen(false)}><NavLink href={'/'}>Home</NavLink></li>
        <li onClick={() => setIsMobileMenuOpen(false)}><NavLink href={'/main/allTiles'}>All Tiles</NavLink></li>
        {user && <li onClick={() => setIsMobileMenuOpen(false)}><NavLink href={'/main/myProfile'}>My Profile</NavLink></li>}
    </>;

    const handleLogout = async () => {
        setIsUserMenuOpen(false);
        await authClient.signOut();
        toast.success('Logged out successfully!');
        router.push('/auth/login');
        router.refresh();
    }

    return (
        <div className='navbar bg-base-100 shadow-sm sticky top-0 left-0 z-[999]'>
            <div className="navbar mx-auto px-0 md:px-5 py-0">
                <div className="navbar-start animate__animated animate__fadeInLeft">
                    
                    <div className="dropdown relative">
                        <div 
                            role="button" 
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <RxActivityLog />
                        </div>
                        
                        {isMobileMenuOpen && (
                            <ul className="menu menu-sm absolute bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow font-medium left-0">
                                {mobileLinks}
                            </ul>
                        )}
                    </div>

                    <Image
                        src={logo}
                        alt='logo'
                        width={100}
                        height={100}
                        className='w-auto'
                    />
                </div>
                
                <div className="navbar-center hidden lg:flex animate__animated animate__zoomIn">
                    <ul className="menu menu-horizontal px-1 font-medium gap-2 animate__animated animate__fadeInLeft">
                        {links}
                    </ul>
                </div>
                
                <div className="navbar-end animate__animated animate__fadeInRight">
                    {isPending ? <SyncLoader color="#2f6ea8" /> :
                        user ? <div className='flex items-center gap-2'>

                            <p>Hello, {user.name}</p>

                            <div className="dropdown dropdown-end flex md:hidden relative">
                                <div 
                                    role="button" 
                                    className="btn btn-ghost btn-circle avatar"
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                                >
                                    <div className="rounded-full">
                                        <Image
                                            src={user.image || userAvatar}
                                            alt='Avatar'
                                            height={60}
                                            width={60}
                                            className='rounded-full h-auto' />
                                    </div>
                                </div>
                                
                                {isUserMenuOpen && (
                                    <ul className="menu menu-sm absolute bg-base-100 rounded-box z-[999] mt-3 p-2 shadow right-0 top-12 w-52">
                                        <li onClick={() => setIsUserMenuOpen(false)}><NavLink href={'/main/myProfile'}>My Profile</NavLink></li>
                                        <li onClick={() => setIsUserMenuOpen(false)}><a>Settings</a></li>
                                        <li>
                                            <button onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>

                            <div className='hidden md:flex items-center gap-2'>
                                <Image
                                    src={user.image || userAvatar}
                                    alt='Avatar'
                                    height={60}
                                    width={60}
                                    className='rounded-full h-auto' />
                                <button
                                    onClick={handleLogout}
                                    className='btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-white'>
                                    <IoLogOut /> Logout
                                </button>
                            </div>
                        </div> :
                            <Link href={'/auth/login'} className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-neutral-content hover:from-[#88BDF2] hover:to-[#384959]"><IoLogIn /> Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};


export default Navbar;