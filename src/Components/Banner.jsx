import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center lg:h-[410px] h-[200px] text-white bg-gradient-to-r from-violet-700 to-purple-500 text-center '>
            <h2 className=' text-[18px] font-bold lg:text-[48px]'>Trusted by Millions, Built for You</h2>
            <div className='flex items-center lg:gap-[70px] lg:mt-3 gap-2'>
                {/* item-01 */}
                <div className='my-3'>
                    <p className='lg:text-[24px] text-[10px]'>Total Downloads</p>
                    <h3 className='lg:text-[38px] text-[22px] font-bold'>29.6M</h3>
                    <p className='lg:text-[24px] text-[10px]'>21% more than last month</p>
                </div>
                {/* item-02 */}
                <div className='my-3'>
                    <p className='lg:text-[24px] text-[10px]'>Total Reviews</p>
                    <h3 className='lg:text-[38px] text-[22px] font-bold'>906K</h3>
                    <p className='lg:text-[24px] text-[10px]'>46% more than last month</p>
                </div>
                {/* item-03 */}
                <div className='my-3'>
                    <p className='lg:text-[24px] text-[10px]'>Active Apps</p>
                    <h3 className='lg:text-[38px] text-[22px] font-bold'>132+</h3>
                    <p className='lg:text-[24px] text-[10px]'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;