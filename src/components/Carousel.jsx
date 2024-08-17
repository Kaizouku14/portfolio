import React, { useState } from 'react';

const Carousel = ({ list }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
    };

    return (
        <div id="controls-carousel" className="relative w-full block max-md:block rounded-md" data-carousel="static">
            <div className="relative h-40 overflow-hidden md:h-96">
                {list.map((value, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
                            src={value.image}
                            className="absolute block w-full object-cover rounded-lg"
                            alt="recipe"
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                className={`absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${currentIndex === 0 ? 'invisible' : 'visible'}`}
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-400 group-hover:bg-slate-300 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className={`absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${currentIndex === list.length - 1 ? 'invisible' : 'visible'}`}
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-400 group-hover:bg-slate-300 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

            <div className="absolute -bottom-7 -right-5 transform -translate-x-1/2 mb-4 text-white bg-slate-800 text-sm px-2 py-1 rounded-xl">
                {currentIndex + 1} / {list.length}
            </div>
        </div>
    );
};

export default Carousel;
