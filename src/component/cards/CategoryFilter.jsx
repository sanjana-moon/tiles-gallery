'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CategoryFilter = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const handleCategory = (category) => {
        const params = new URLSearchParams(searchParams)

        if (category) {
            params.set("category", category)
        } else {
            params.delete("category")
        }

        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <div className='border pl-2 rounded-lg border-gray-400 m-2'>
                <label tabIndex={0} role="button" className='mr-2 font-medium'>Filter by category: </label>
                <select
                value={searchParams.get('category') || ''}
                    onChange={(e) => handleCategory(e.target.value)}
                    className="bg-base-100 rounded-box w-48 p-2 shadow-sm">
                    <option value="">All tiles</option>
                    <option value="ceramic">Ceramic</option>
                    <option value="wood">Wood</option>
                    <option value="granite">Granite</option>
                    <option value="stone">Stone</option>
                    <option value="mosaic">Mosaic</option>
                    <option value="luxury">Luxury</option>
                    <option value="brick">Brick</option>
                    <option value="marble">Marble</option>
                    <option value="concrete">Concrete</option>
                    <option value="decorative">Decorative</option>
                    <option value="rustic">Rustic</option>
                </select>
            </div>
        </div>
    );
};

export default CategoryFilter;