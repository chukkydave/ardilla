import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import backgroundImage from '../../assets/images/heroBack.png';
import graph from '../../assets/images/graph.png';

const Hero = () => {
    const [frequency, setFrequency] = useState('Monthly');
    const [amount, setAmount] = useState(2000);
    const [months, setMonths] = useState(3);

    const handleFrequencyChange = (e) => setFrequency(e.target.value);
    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleMonthsChange = (e) => setMonths(e.target.value);

    const totalSavings = amount * months;
    const interest = (totalSavings * 0.02).toFixed(2);
    const totalBalance = (parseFloat(totalSavings) + parseFloat(interest)).toFixed(2);

    return (
        <section
            className="relative overflow-hidden bg-cover bg-center min-h-screen flex font-cabinet items-center justify-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container lg:pt-[12rem] pt-[9rem] px-4 md:px-8 lg:px-16 z-10">
                <h1 className="text-3xl font-cabinet text-white lg:text-5xl font-bold mb-14">Calculate Your Interests</h1>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className="w-full font-cabinet font-medium md:w-1/2 mb-8 md:mb-0">
                        <div className="mb-12">
                            <label className="block mb-4">How often are you saving?</label>
                            <div className="relative">
                                <select
                                    value={frequency}
                                    onChange={handleFrequencyChange}
                                    className="appearance-none w-full md:w-2/3 bg-transparent text-sm border border-white rounded-md py-5 px-5 pr-10  focus:outline-none focus:ring-2 focus:ring-purple-600"
                                >
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-12">
                            <label className="block mb-4">How much are you saving?</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                                className="w-full md:w-2/3 bg-transparent border-b text-2xl border-white rounded-md py-5 px-5 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-12">
                            <label className="block mb-4">How long are you saving for? (In months)</label>
                            <input
                                type="number"
                                value={months}
                                onChange={handleMonthsChange}
                                className="w-full md:w-2/3 bg-transparent border-b text-2xl border-white rounded-md py-5 px-5 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-white text-purple-800 rounded-md p-6 shadow-lg flex flex-col justify-between min-h-[60vh]">
                        <div>
                            <h2 className="text-[12px] text-[#9CA3AF] font-medium mb-1">Total Balance</h2>
                            <p className="text-2xl font-bold mb-8">₦{totalBalance}</p>
                            <p className="font-normal text-[15px] text-[#9CA3AF] mb-8">Saving <span className='font-semibold'>₦{amount}</span> {frequency.toLowerCase()} for {months} months will result in a balance of <span className='font-semibold'>₦{totalBalance}</span></p>
                            <h1 className="text-[12px] text-[#9CA3AF] font-medium mb-1">Interest</h1>
                            <p className="text-2xl font-bold mb-8">₦{interest} <span className='font-light'>(2%)</span></p>
                            <div className='flex'>
                                <div>
                                    <h1 className="text-[12px] text-[#9CA3AF] font-medium mb-1">Total Savings</h1>
                                    <p className="text-2xl font-bold mb-8">₦{totalSavings} <span className='font-light'>(2%)</span></p>
                                </div>
                                <img src={graph} alt="Graph" className="hidden lg:block w-[79%] mb-4 " />
                            </div>
                        </div>
                        <button className="bg-[#8807F7] text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-purple-600 transition self-start">Start Saving Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;