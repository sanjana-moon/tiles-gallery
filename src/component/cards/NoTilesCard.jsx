import React from 'react';

const NoTilesCard = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center min-h-[80vh]'>
            <h1 className='italic text-7xl md:text-9xl font-bold text-[#384959] mb-6'>Sorry!</h1>
            <p className='text-gray-600 text-xl'>No Tiles available according to your search</p>
        </div>
    );
};

export default NoTilesCard;