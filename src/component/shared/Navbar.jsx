import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from "@/assets/Logo.png"
import Image from 'next/image';

const Navbar = () => {

    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/main/allTiles'}>All Tiles</Link></li>
        <li><Link href={'/main/myProfile'}>My Profile</Link></li>
    </>

    return (
        <div className='navbar bg-base-100 shadow-sm sticky top-0'>
            <div className="navbar mx-auto px-5 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                           <RxHamburgerMenu />
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
                            {links}
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
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={'/auth/login'} className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-neutral-content hover:from-[#88BDF2] hover:to-[#384959]">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;