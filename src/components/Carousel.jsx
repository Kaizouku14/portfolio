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
        <div id="controls-carousel" className="relative h-full w-full max-md:h-[14rem] flex items-center justify-center" data-carousel="static">
            {list.map((value, index) => (
                <div
                    key={index}
                    className={`${index === currentIndex ? 'block' : 'hidden'} rounded-lg`}
                    data-carousel-item
                >
                    <img
                        src={value.image}
                        className="object-contain h-[26rem] max-md:h-[20rem] rounded-xl lg:h-fit "
                        alt="projectImage"
                    />
                </div>
            ))}

            <button
                    type="button"
                    className={` absolute top-0 -start-8 max-md:-start-3 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none ${currentIndex === 0 ? 'invisible' : 'visible'}`}
                    onClick={handlePrev}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full  group-hover:hover:scale-[1.05] group-hover:text-gray-100 transition-transform group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white"
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
                    className={` absolute top-0 -end-8 max-md:-end-3 z-30 flex items-center justify-start h-full  cursor-pointer group focus:outline-none ${currentIndex === list.length - 1 ? 'invisible' : 'visible'}`}
                    onClick={handleNext}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full  group-hover:hover:scale-[1.05] group-hover:text-gray-100 transition-transform  group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white"
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

            <div className="absolute -bottom-5 -right-6 max-md:-bottom-10 max-md:-right-6  transform -translate-x-1/2 mb-4 text-white bg-slate-800 text-sm px-2 py-1 rounded-xl">
                {currentIndex + 1} / {list.length}
            </div>    
        </div>
    );
};

export default Carousel;
