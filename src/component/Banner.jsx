import banner from "@/assets/Tiles-2.avif"
import Link from "next/link";

const Banner = () => {
    return (
        <div className='min-h-[80vh]'>
            <div
                className="hero min-h-[80vh]"
                style={{
                    backgroundImage: `url(${banner.src})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Aesthetic</h1>
                        <p className="mb-5">
                            Step into a world of stunning tile designs where creativity meets craftsmanship.
                            Discover elegant textures, vibrant colors, and timeless patterns that bring life
                            to your interiors. Your perfect aesthetic starts here.
                        </p>
                        <Link href={'/main/allTiles'}><button className="btn bg-[#384959] hover:bg-[#88BDF2] text-white border-none">Browse now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;