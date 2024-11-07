import React, { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { navLinks } from '../constant';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }
    return (
        <nav className=' mt-3'>
            <div className='flex justify-between items-end px-10' >

                <h3 className='text-4xl font-palanquin font-bold text-brown-500 '>Woddy</h3>

                <ul className='hidden md:flex  space-x-9  '>

                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='text-lg font-montserrat'>
                                {item.label}
                            </a>
                        </li>
                    ))}


                </ul>

                <div className='mt-1 cursor-pointer flex space-x-9 text-xl '>
                    <FaShoppingCart />
                    <FaUserCircle />
                </div>

                <div className='md:hidden  cursor-pointer' onClick={toggleMenu} >
                    {isOpen ? (<FaTimes className='text-2xl' />) :
                        (<FaBars className='text-2xl' />)

                    }

                </div>

            </div>

            {
                isOpen && (
                    <ul className='md:hidden absolute h-full  flex flex-col z-50 items-end space-y-3 mt-4 w-11/12 '>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}> {item.label}</a>
                            </li>

                        ))}
                    </ul>
                )
            }
        </nav>
    );
};

export default Navbar;
