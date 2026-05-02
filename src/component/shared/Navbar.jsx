'use client'

import Link from 'next/link';
import { RxActivityLog } from 'react-icons/rx';
import logo from "@/assets/Logo.png"
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { SyncLoader } from 'react-spinners';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/main/allTiles'}>All Tiles</NavLink></li>
        <li><NavLink href={'/main/myProfile'}>My Profile</NavLink></li>
    </>

    return (
        <div className='navbar bg-base-100 shadow-sm sticky top-0 left-0 z-1'>
            <div className="navbar mx-auto px-0 md:px-5 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RxActivityLog />
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
                            <li><NavLink href={'/'}>Home</NavLink></li>
                            <li><NavLink href={'/main/allTiles'}>All Tiles</NavLink></li>
                        </ul>
                    </div>
                    <Image
                        src={logo}
                        alt='logo'
                        width={100}
                        height={100}
                        className='w-auto'
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium gap-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {isPending ? <SyncLoader color="#2f6ea8" /> :
                        user ? <div className='flex items-center gap-2'>

                            <p>Hello, {user.name}</p>

                            <div className="dropdown dropdown-end flex md:hidden">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="rounded-full">
                                        <Image
                                            src={user.image || userAvatar}
                                            alt='Avatar'
                                            height={60}
                                            width={60}
                                            className='rounded-full h-auto' />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                                    <li><NavLink href={'/main/myProfile'}>My Profile</NavLink></li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={async () => await authClient.signOut()}>Logout</button></li>
                                </ul>
                            </div>

                            <div className='hidden md:flex items-center gap-2'>
                                <Image
                                    src={user.image || userAvatar}
                                    alt='Avatar'
                                    height={60}
                                    width={60}
                                    className='rounded-full h-auto' />
                                <button onClick={async () => await authClient.signOut()} className='btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-white'>Logout</button>
                            </div>
                        </div> :
                            <Link href={'/auth/login'} className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-neutral-content hover:from-[#88BDF2] hover:to-[#384959]">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;