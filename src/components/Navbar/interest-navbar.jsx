import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdArrowDropDown } from "react-icons/md";
import logoWhite from '../../assets/images/logo.png';
import logoPurple from '../../assets/images/logo-purple.svg';
import earthImage from '../../assets/images/earth.png';
import { Link } from 'react-router-dom';

const InterestNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 lg:px-32 md:px-16 px-8 transition-all ${isScrolled ? 'bg-[#F6F7F9] shadow-md md:py-6 py-4' : 'lg:py-14 md:py-10 py-8 bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">  <img src={isScrolled ? logoPurple : logoWhite} alt="Logo" className="h-8" /></Link>
                </div>

                {/* Desktop Menu */}
                <ul className={`hidden lg:flex font-cabinet font-medium gap-5 text-[15px] space-x-6 ${isScrolled ? 'text-[#240053]' : 'text-white'}`}>
                    <li><a href="#products" className="hover:text-purple-600 flex items-center">Products <MdArrowDropDown className='h-5 w-5' /></a></li>
                    <li><a href="#business" className="hover:text-purple-600 flex items-center">Business <span className=' font-light text-[7px] border py-0 ms-1 leading-[1.5] px-2 rounded-md'> Beta</span></a></li>
                    <li><a href="#company" className="hover:text-purple-600 flex items-center">Company <MdArrowDropDown className='h-5 w-5' /></a></li>
                    <li><a href="#learn" className="hover:text-purple-600">Learn</a></li>
                </ul>

                {/* Country Dropdown and Create Account Button */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link className={`font-cabinet font-medium hover:text-purple-600 text-[15px] ${isScrolled ? 'text-[#240053]' : 'text-white'}`}>Sign In</Link>
                    <button className={`rounded-full font-cabinet hover:bg-white hover:text-[#8807F7] font-bold text-sm px-6 py-3 ${isScrolled ? 'bg-[#8807F7] text-white' : 'bg-[#fff] text-[#3D0072]'}`}>Create Account</button>
                    <div className="relative flex items-center">
                        <div className="rounded-full p-2 bg-[#fff] border border-white flex items-center justify-center">
                            <img src={earthImage} alt="Earth" className="h-[18px] w-[18px] rounded-full" />
                        </div>
                        <div className="ms-1">
                            <svg className={`w-[11.6px] h-[11.6px] ${isScrolled ? 'text-[#240053]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>


                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className={`lg:hidden text-2xl ${isScrolled ? 'text-[#8807F7]' : 'text-white'}`}>
                    {isMobileMenuOpen ? <FaTimes color='#240053' /> : <FaBars color={isScrolled ? '#240053' : '#ffffff'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (

                <div className='lg:hidden flex items-end w-full'>
                    <div className="fixed inset-0 bg-[#F6F7F9] right-0 z-50 flex flex-col p-6 space-y-4">
                        <button onClick={closeMobileMenu} className="self-end text-2xl text-[#8807F7]">
                            <FaTimes color='#240053' />
                        </button>
                        <ul className="flex font-cabinet font-medium flex-col text-[15px] items-center space-y-4 text-[#240053]">
                            <li><a href="#products" className="hover:text-purple-600 flex items-center" onClick={closeMobileMenu}>Products <MdArrowDropDown className='h-5 w-5' /></a></li>
                            <li><a href="#business" className="hover:text-purple-600 flex items-center" onClick={closeMobileMenu}>Business <span className=' font-light text-[7px] border border-[#240053] py-0 ms-1 leading-[1.5] px-2 rounded-md'> Beta</span></a></li>
                            <li><a href="#company" className="hover:text-purple-600 flex items-center" onClick={closeMobileMenu}>Company <MdArrowDropDown className='h-5 w-5' /></a></li>
                            <li><a href="#learn" className="hover:text-purple-600 flex items-center" onClick={closeMobileMenu}>Learn</a></li>
                        </ul>
                        <div className='flex flex-col items-center'>
                            <Link className={`font-cabinet font-medium hover:text-purple-600 text-[15px] text-[#240053]`}>Sign In</Link>

                            <button className="bg-[#240053] hover:bg-[#d5abfc] hover:text-[#240053] text-white font-cabinet font-bold rounded-full px-8 py-4 mt-4">Create Account</button>

                            <div className="flex items-center mt-4">
                                <div className="rounded-full p-2 bg-[#d5abfc] border border-white flex items-center justify-center">
                                    <img src={earthImage} alt="Earth" className="h-[18px] w-[18px] rounded-full" />
                                </div>
                                <div className="ms-1">
                                    <svg className='w-[11.6px] h-[11.6px] text-[#240053]' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default InterestNavbar;