import logo from "@/assets/Logo.png"
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 items-start">
                <aside>
                    <Image
                        src={logo}
                        alt='logo'
                        width={150}
                        height={150}
                        className='w-auto' />
                    <p className="font-medium text-[#384959]">
                        Tiles Gallery Ltd.
                        <br />
                        Providing reliable Tiles since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <footer className="footer sm:footer-horizontal bg-[#384959] text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <FaTwitter className="w-6 h-6" />
                    <FaYoutube className="w-6 h-6" />
                    <FaFacebook className="w-6 h-6" />
                </nav>
            </footer>
        </div>
    );
};

export default Footer;