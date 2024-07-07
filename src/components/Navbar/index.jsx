import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoWhite from '../../assets/logo.png';
import logoPurple from '../../assets/logo-purple.svg';
import earthImage from '../../assets/earth.png';

const Navbar = () => {
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
                    <img src={isScrolled ? logoPurple : logoWhite} alt="Logo" className="h-8" />
                </div>

                {/* Desktop Menu */}
                <ul className={`hidden lg:flex font-cabinet font-medium gap-[50px] text-sm space-x-6 ${isScrolled ? 'text-[#240053]' : 'text-white'}`}>
                    <li><a href="#products" className="hover:text-purple-600">Products</a></li>
                    <li><a href="#business" className="hover:text-purple-600">Business</a></li>
                    <li><a href="#company" className="hover:text-purple-600">Company</a></li>
                    <li><a href="#learn" className="hover:text-purple-600">Learn</a></li>
                </ul>

                {/* Country Dropdown and Create Account Button */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* <div className="relative">
                        <select className="bg-[#d5abfc] border border-white rounded-full p-2">
                            <option>🇺🇸</option>
                            <option>🇬🇧</option>
                            <option>🇨🇦</option>
                        </select>
                    </div> */}
                    <div className="relative flex items-center">
                        <div className="rounded-full p-2 bg-[#d5abfc] border border-white flex items-center justify-center">
                            <img src={earthImage} alt="Earth" className="h-[18px] w-[18px] rounded-full" />
                        </div>
                        <div className="ms-1">
                            <svg className={`w-[11.6px] h-[11.6px] ${isScrolled ? 'text-[#240053]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                    <button className={`rounded-full font-cabinet hover:bg-white hover:text-[#8807F7] font-bold text-sm px-6 py-3 ${isScrolled ? 'bg-[#8807F7] text-white' : 'bg-[#8807F7] text-white'}`}>Create Account</button>
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
                        <ul className="flex font-cabinet font-medium flex-col items-center space-y-4 text-[#240053]">
                            <li><a href="#products" className="hover:text-purple-600" onClick={closeMobileMenu}>Products</a></li>
                            <li><a href="#business" className="hover:text-purple-600" onClick={closeMobileMenu}>Business</a></li>
                            <li><a href="#company" className="hover:text-purple-600" onClick={closeMobileMenu}>Company</a></li>
                            <li><a href="#learn" className="hover:text-purple-600" onClick={closeMobileMenu}>Learn</a></li>
                        </ul>
                        <div className='flex flex-col items-center'>
                            <div className="flex items-center">
                                <div className="rounded-full p-2 bg-[#d5abfc] border border-white flex items-center justify-center">
                                    <img src={earthImage} alt="Earth" className="h-[18px] w-[18px] rounded-full" />
                                </div>
                                <div className="ms-1">
                                    <svg className='w-[11.6px] h-[11.6px] text-[#240053]' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                            <button className="bg-[#240053] hover:bg-[#d5abfc] hover:text-[#240053] text-white font-cabinet font-bold rounded-full px-8 py-4 mt-4">Create Account</button>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;