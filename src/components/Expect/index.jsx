import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import BgImage from "../../assets/images/back.png";
import expect1 from "../../assets/images/expect1.png";
import expect2 from "../../assets/images/expect2.png";
import expect3 from "../../assets/images/expect3.png";
import expect4 from "../../assets/images/expect4.png";
import expect5 from "../../assets/images/expect5.png";
import expect6 from "../../assets/images/expect6.png";
import expect7 from "../../assets/images/expect7.png";
import expect8 from "../../assets/images/expect8.png";
import './index.css'

const carouselItems = [
    {
        color: 'bg-red-500',
        font: 'text-white',
        title: 'Access to more financial tools',
        image: expect1
    },
    {
        color: 'bg-purple-500',
        font: 'text-white',
        title: 'More investment opportunities',
        image: expect2
    },
    {
        color: 'bg-green-500',
        font: 'text-white',
        title: 'More Savings',
        image: expect3
    },
    {
        color: 'bg-yellow-500',
        font: 'text-white',
        title: 'Join a passionate wealth building community',
        image: expect4
    },
    {
        color: 'bg-blue-500',
        font: 'text-white',
        title: 'Free financial advice from vetted financial coaches',
        image: expect5
    },
    {
        color: 'bg-white',
        font: 'text-green-700',
        title: 'Build wealth without compromising your belief',
        image: expect6
    },
    {
        color: 'bg-orange-500',
        font: 'text-white',
        title: 'Pro budgeting guide',
        image: expect7
    },
    {
        color: 'bg-purple-500',
        font: 'text-white',
        title: 'Get your unique San ID',
        image: expect8
    },
];

const Expect = () => {
    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="bg-white md:py-[89px] py-[4rem] lg:pl-32 md:pl-16 pl-8">
            <div className="flex justify-between items-center mb-8">
                <div
                    className="relative bg-cover bg-center rounded-full text-white text-lg font-bold py-2 px-6"
                    style={{ backgroundImage: `url(${BgImage})`, width: 'fit-content' }}
                >
                    <span className="flex items-center font-cabinet font-bold justify-center" style={{ height: 'fit-content' }}>
                        What you can expect
                    </span>
                </div>
            </div>
            <div className="flex justify-end mb-4 mr-8">
                {!isAtStart && (
                    <button onClick={handlePrev} className="bg-gray-200 text-secondary-foreground p-2 mr-2 hover:bg-gray-300 rounded-full">
                        <FaArrowLeft className="text-gray-700" />
                    </button>
                )}
                {!isAtEnd && (
                    <button onClick={handleNext} className="bg-gray-200 hover:bg-gray-300 text-secondary-foreground p-2 rounded-full">
                        <FaArrowRight className="text-gray-700" />
                    </button>
                )}
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-container">
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className={` ${item.font} p-6 rounded-lg flex-shrink-0 w-64 h-40`}
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className='w-3/4 font-cabinet font-medium text-base '>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expect;