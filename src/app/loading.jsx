import React from 'react';
import { CircleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <CircleLoader color="#2f6ea8" />
        </div>
    );
};

export default loading;