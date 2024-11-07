import React from 'react'

const Hero = () => {
    return (




        <div className="w-full m-0 p-6 md:pt-11 md:pl-11  max-sm:p-5">

            <section className='  flex flex-col  md:flex-row items-center w-full'>

                <div className=' pt-10 md:pt-20  md:text-left'>
                    <h1 className='font-bold font-palanquin text-4xl md:text-6xl '>Modern furniture for minimalist lovers</h1>
                    <p className=' font-montserrat text-base  md:text-lg  mt-4 md:mt-5 text-slate-500'> Experience the ultimate relaxation with our collection of serene and tranquil spa-inspired designs</p>
                    <button className='bg-yellow-300 mt-7 md:mt-9 font-montserrat py-4 px-7 rounded-lg hover:bg-yellow-500 cursor-pointer'>Shop now</button>
                </div>
                <div className=' pt-8 md:pl-9'>
                    <img
                        src="src/assets/image/hero.jpg"
                        alt="Hero"
                        className=' w-full md:w-[700px] lg:w-[600px] h-auto rounded-3xl object-cover md:pr-0' />
                </div>

            </section>

            <div className='w-full h-full  flex-row  max-sm:pt-5 '>
                <h1 className='font-bold font-palanquin text-4xl md:text-6xl'>Our new exclusive collection </h1>
                <p className='font-montserrat text-base  md:text-lg  md:mt-4 text-slate-500'>elevate your interiors with curation selection premium furniture and accessories</p>


            </div >

        </div>

    )
}

export default Hero