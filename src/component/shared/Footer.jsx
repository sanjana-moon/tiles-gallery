import logo from "@/assets/Logo-2.png"
import Image from 'next/image';
import { FaFacebook, FaMailBulk, FaPhone, FaTimes, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";

const Footer = () => {
    return (
        <div className="animate__animated animate__backInLeft">
            <footer className="footer sm:footer-horizontal bg-[#384959] text-white border-b border-white p-10 items-start">
                <aside>
                    <Image src={logo} alt='logo' width={150} height={150} className='w-auto mb-3' />
                    <h2 className="font-medium text-3xl">Tiles Gallery</h2>
                    <p className="text-sm opacity-80 mt-2">
                        Style. Strength. Satisfaction.
                    </p>
                    <p>Providing reliable Tiles since 1992</p>
                </aside>

                <nav>
                    <h6 className="footer-title font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav>
                    <h6 className="footer-title font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press Kit</a>
                    <a className="link link-hover mt-6 font-bold text-lg text-gray-400">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                <nav>
                    <h6 className="footer-title font-bold">Contact Us</h6>
                    <p className="italic">Planning your space? <br /> Let's create a stunning look with us!</p>

                    <div className="flex gap-3 items-start">
                        <HiLocationMarker className="mt-1" />
                        <div>
                            <p className="font-medium">Address</p>
                            <p className="text-sm opacity-80">House #00, Road #00, <br /> Block X, Dhaka 0000</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <FaPhone className="mt-1" />
                        <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm opacity-80">01*********</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <FaMailBulk className="mt-1" />
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm opacity-80">tilesgallery@email.com</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <MdAccessTimeFilled className="mt-1" />
                        <div>
                            <p className="font-medium">Opening Hours</p>
                            <p className="text-sm opacity-80">9:00 AM – 7:00 PM (Everyday)</p>
                        </div>
                    </div>
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