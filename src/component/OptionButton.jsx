import React, { useState } from 'react';
import { bed, chair, dinning, kitchen, shelves } from '../constant';

// Array to hold all category data for easy reference
const categories = {
    Dinning: dinning,
    Chair: chair,
    Bed: bed,
    Kitchen: kitchen,
    Shelves: shelves
};

const OptionButton = () => {
    const [activeCategory, setActiveCategory] = useState("Chair");  // Default to "Chair" category

    const options = Object.keys(categories);

    // Function to handle button click and set the active category
    const handleClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="md:pt-11 md:pl-11 max-sm:p-5">
            <header className="grid grid-cols-2 gap-4 md:flex md:space-x-11 w-full h-auto">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(option)}
                        className={`mt-2 font-montserrat py-4 px-7 rounded-3xl cursor-pointer 
                            ${activeCategory === option ? 'bg-yellow-300' : 'bg-gray-100 text-gray-800'}
                            hover:bg-yellow-300`}
                    >
                        {option}
                    </button>
                ))}
            </header>

            {/* Render images based on the active category */}
            <div className="md:pt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories[activeCategory].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-300">
                        <img src={item.image} alt={item.name} className="w-full h-auto " />
                        <p className="pt-2 text-center">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OptionButton;
