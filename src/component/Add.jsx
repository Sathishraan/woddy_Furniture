import React from 'react';

const Add = () => {
    return (
        <div className=' max-sm:pl-6 flex p-11 flex-col md:flex-row w-full h-auto'>
            {/* Image container */}
            <div className='pt-8 md:pl-9 flex-shrink-0'>
                <img
                    src="src/assets/image/furniture1.avif"
                    alt="Hero"
                    className='w-full md:w-[700px] lg:w-[600px] h-auto rounded-3xl object-cover'
                />
            </div>

            {/* Text container */}
            <div className='pt-10 md:pt-0 md:pl-12 lg:ml-20 flex flex-col justify-center'>
                <h1 className='font-bold font-palanquin text-4xl md:text-5xl lg:text-6xl'>
                    New Experience is Going to Unlock
                </h1>

                <p className='font-mantserrat text-lg md:text-xl mt-4 md:mt-6 lg:mt-8 text-slate-500'>
                    Indulge in comfort and style with our range of plush furniture and unique accents.
                </p>
            </div>

            
        </div>
    );
};

export default Add;
