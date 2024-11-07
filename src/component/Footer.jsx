import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' max-sm:pt-4 max-sm:pl-4    w-full h-full bg-black md:grid text-white  md:gap-32 md:grid-cols-3  '>


            <div className='md:pt-6 md:pl-11'>

                <h1 className='font-palanquin font-bold text-lg md:text-5xl  text-white md:pt-0'>
                    Woddy
                </h1>

                <p className='font-mantserrat  text-lg md:text-xl text-white md:pt-5'>Get furniture ready for new terms at your nearest  woddy store.Find Your perfect comfortable In Store. Get Rewards</p>
                <div className='text-white md:flex md:gap-10 md:ml-0  md:pt-10 md:pb-10 text-6xl  max-sm:flex max-sm:gap-7 max-sm:pt-4 '>
                    <a href="">
                        <FaFacebookF />
                    </a>
                    <a href="">

                        <FaTwitter />
                    </a>
                    <a href="">

                        <FaInstagram />
                    </a>

                </div >


            </div>




            <div className='md:pt-5 w-full h-full max-sm:flex max-sm:pt-6   md:flex md:space-x-36 max-sm:space-y-3 '>

                <div className='md:space-y-3 max-sm:pt-3'>

                    <h1 className='font-palanquin text-4xl'>Product</h1>

                    <p>Chair</p>
                    <p>kitchen</p>
                    <p>Dinning</p>
                    <p>Bed</p>
                    <p>Shelves</p>
                </div>

                <div className='md:space-y-3 max-sm:pl-14'>

                    <h1 className='font-palanquin text-4xl'>Help</h1>
                    <p>About</p>
                    <p>FAQs</p>
                    <p>How its work</p>
                    <p>Privacy Policy</p>
                    <p>Payment Policy</p>
                </div>








            </div>




            <div className='max-sm:pt-7 max-sm:pb-3 md:pt-5 w-full h-full space-y-3'>
                <h1 className='font-palanquin text-4xl'>Get in touch </h1>
                <p>sathishraana0701@gmail.com</p>
                <p>+91 8925315954</p>

            </div>






        </div>
    )
}

export default Footer