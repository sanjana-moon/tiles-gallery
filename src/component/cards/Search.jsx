'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {

    const [searchInp, setSearchInp] = useState("")

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    
    const handleSearch = () => {
        const params = new URLSearchParams(searchParams)

        if(searchInp){
            params.set("search", searchInp)
        } else{
            params.delete("search")
        }

        router.push(`${pathname}?${params.toString()}`)

    }

    return (
        <div className="">
            <div className='flex items-center justify-end'>
                <label className="input">
                    <FaSearch className='text-[#384959]' />
                    <input
                        type="text"
                        value={searchInp}
                        onChange={(e) => setSearchInp(e.target.value)}
                        placeholder="Type here to search" />
                </label>
                <button
                    onClick={handleSearch}
                    className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-white">
                    Search</button>
            </div>
        </div>
    );
};

export default Search;