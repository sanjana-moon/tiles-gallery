import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">

            <h1 className="text-7xl md:text-9xl font-bold text-[#384959]">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#384959] mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-700 mt-2 max-w-md">
                Oops! The page you're looking for doesn’t exist or has been moved.
            </p>

            <Link href="/">
                <button className="mt-6 px-6 py-3 rounded-xl text-white font-medium 
                    bg-linear-to-r from-[#384959] to-[#88BDF2] 
                    hover:from-[#384959] hover:to-[#384959] transition-all duration-300">
                    Go Home
                </button>
            </Link>
        </div>
    );
}