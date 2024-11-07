import React from 'react'

const ShopNow = () => {
    return (




        <div className=''>

            <section className=' max-sm:p-0 md:pl-11 md:pt-0 flex flex-col w-full h-auto md:flex-row items-center bg-slate-200'>

                <div className=' pt-10 md:pt-20  md:text-left pl-8'>
                    <h1 className='font-bold font-palanquin text-4xl md:text-6xl '>Meets the functionality</h1>
                    <p className=' font-montserrat text-base  md:text-lg  pt-4 md:pt-5 text-slate-500'> Experience the ultimate relaxation with our collection of serene and tranquil spa-inspired designs</p>
                    <button className='bg-yellow-300 max-sm:mt-4 max-sm:rounded-2xl max-sm:py-3 max-sm:px-4 md:pt-3  md:mt-4  font-montserrat md:py-3 md:px-4 rounded-lg hover:bg-yellow-500 cursor-pointer'>Shop now</button>
                </div>
                <div className=' max-sm:mt-5 md:pl-24 '>
                    <img
                        src="src/assets/image/furniture2.avif"
                        alt="Hero"
                        className=' w-full h-full md:w-[800px]  max-sm:p-6     object-cover' />
                </div>


            </section>

            <div className='mt-16 ml-4 font-bold font-palanquin text-4xl
                      md:mt-32 md:text-6xl md:flex justify-center '>
                <h1>
                    Inspiring interior crafted with passion
                </h1>
            </div>


            <div className='  w-full h-auto flex max-sm:pl-5 max-sm:pt-5 max-sm:gap-0 p-0 md:gap-9 md:p-9 lg:p-11 md:flex  '>

                <div className='md:flex-col lg:w-[800px] lg:h-[400px]  max-sm:w-[270px] max-sm:h-[190px] '>

                    <img src="src/assets/image/Brown Furniture Sale Banner.jpg" alt="imge"
                        className='rounded-3xl  md:flex justify-items-end ' />

                    <img src="src/assets/image/Yellow And Cream Minimalist Furniture Sale Banner.jpg" alt="imge"
                        className='rounded-3xl  md:flex justify-items-end md:pt-4 max-sm:pt-4' />
                </div>



                <img src="src/assets/image/Grey and Brown Furniture Simple Now Over Bezia Furniture Instagram Story.jpg" alt="imge"
                    className='rounded-3xl md:w-[590px] md:h-[810px] lg:pl-0 md:flex justify-items-end max-sm:w-[190px] max-sm:h-[265px] max-sm:pr-3 max-sm:pl-4' />
            </div>

            <div className='flex-row md:flex w-full h-auto   '>

                <img src="src/assets/image/finalchair.jpg" alt="final chair" className='md:w-[490px] md:h-[610px] max-sm:w-[290px] max-sm:h-[410px]' />

                <div className='md:flex-row md:pt-64 p-8  max-sm:pt-3'>

                    <h1 className='font-bold font-palanquin text-4xl md:text-5xl lg:text-6xl'>
                        New Experience is Going to Unlock
                    </h1>

                    <p className='font-mantserrat text-lg md:text-xl pt-4 md:pt-6 lg:pt-8 text-slate-500 max-sm:pt-7'>
                        Indulge in comfort and style with our range of plush furniture and unique accents.
                    </p>
                </div>


            </div>


        </div>

    )
}

export default ShopNow