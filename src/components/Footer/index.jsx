import React from 'react';
import floatingCard from '../../assets/images/phoneScreenshot.png';
import BgImage from '../../assets/images/bgImage.png';
import { CiTwitter } from 'react-icons/ci';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-[#8807F7] text-white mt-16 py-16">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative max-w-3xl z-10">
                <div className="absolute inset-x-0 -top-1/3 transform -translate-y-1/2 flex justify-center">
                    <div className="bg-cover bg-center px-8 pt-8 rounded-lg flex items-center justify-between w-full max-w-6xl" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="text-left w-1/2 py-8">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-cabinet text-white font-bold">Download for free Start saving Today</h2>
                            <button className="mt-4 bg-white text-[#3C0071] font-cabinet py-2 px-4 rounded-lg hover:bg-gray-100 transition">
                                Download for free
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={floatingCard} alt="Floating Card" className="h-48 w-96" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-48">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left">
                    <div>
                        <h3 className="font-extrabold text-sm font-cabinet text-white mb-2">Products</h3>
                        <ul className='font-normal text-sm font-cabinet text-white'>
                            <li className="mb-4">Savings</li>
                            <li className="mb-4">Dilla</li>
                            <li className="mb-4">Financial Coach</li>
                            <li className="mb-4">Halal</li>
                            <li className="mb-4">Budgeting <span className="font-thin text-[8px] border rounded-xl p-1">Coming Soon</span></li>
                            <li className="mb-4">Investment <span className="font-thin text-[8px] border rounded-xl p-1">Coming Soon</span></li>
                            <li >Insurance <span className="font-thin text-[8px] border rounded-xl p-1">Coming Soon</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-sm font-cabinet text-white mb-2">Company</h3>
                        <ul className='font-normal text-sm font-cabinet text-white'>
                            <li className="mb-4">About us</li>
                            <li className="mb-4">Careers</li>
                            <li className="mb-4">FAQs</li>
                            <li >Press</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-sm font-cabinet text-white mb-2">Transparency</h3>
                        <ul className='font-normal text-sm font-cabinet text-white'>
                            <li className="mb-4">Terms & conditions</li>
                            <li className="mb-4">Information security policy</li>
                            <li className="mb-4">Privacy policy</li>
                            <li >Interest Tool</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-sm font-cabinet text-white mb-2">Developer</h3>
                        <ul className='font-normal text-sm font-cabinet text-white'>
                            <li >Connect API <span className="font-thin text-[8px] border rounded-xl p-1">Coming Soon</span></li>
                        </ul>

                    </div>
                    <div>
                        <h3 className="font-extrabold text-sm font-cabinet text-white  mb-2">Address</h3>
                        <address className="not-italic font-normal text-sm font-cabinet text-white mb-4">
                            33B, Ogundana street, Allen, Ikeja.
                        </address>
                        <h3 className="font-extrabold text-sm font-cabinet text-white mb-2">Contact</h3>
                        <ul className='font-normal text-sm font-cabinet text-white'>
                            <li className="mb-4"> support@ardilla.africa</li>
                            <li >(234)801 000 1234</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-left container mx-auto px-4 md:px-8 lg:px-16 mt-8">
                <hr />
                <div className='flex flex-row justify-between mt-8 mb-4'>
                    <p className='font-medium text-sm font-cabinet text-white'> &copy; 2023 Ardilla. All rights reserved</p>
                    <div className="flex gap-2">
                        <FaInstagram className="border rounded-full p-1 lg:w-8 lg:h-8 w-6 h-6 transition-transform transform hover:scale-110 " />
                        <FaFacebookF className="border rounded-full p-1 lg:w-8 lg:h-8 w-6 h-6 transition-transform transform hover:scale-110 " />
                        <FaLinkedinIn className="border rounded-full p-1 lg:w-8 lg:h-8 w-6 h-6 transition-transform transform hover:scale-110 " />
                        <CiTwitter className="border rounded-full p-1 lg:w-8 lg:h-8 w-6 h-6 transition-transform transform hover:scale-110 " />
                    </div>
                </div>
                <p className='font-normal text-sm font-cabinet text-white'>Ardilla operates under the cooperative license of Ardilla Multipurpose Cooperative Society, LSC 18245. We provide Savings and Fixed deposit services to our users.</p>
            </div>
        </footer>
    );
}