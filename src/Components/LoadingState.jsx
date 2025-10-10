import React from 'react';

const LoadingState = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[50px]'>
             <h1 className='text-[60px]'>Data is Loading</h1>
             <h3 className='text[30px]'>Please Wait</h3>
             <span className="loading loading-spinner loading-xl "></span>
        </div>
    );
};

export default LoadingState;