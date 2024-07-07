import React from 'react';
import backgroundImage from '../../assets/images/arrow-bg.png';
import send from '../../assets/images/purple-send.png';

export default function Invest() {
    return (
        <section className="relative lg:px-32 md:px-16 px-8 bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="max-w-6xl mx-auto pt-24 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#3D0072] leading-tight">
                    Unlimited <span className="text-[#0D9488]">Investment</span> <br /> <span className="text-[#0D9488]">Opportunities</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-[#3D0072] mt-4 leading-thin">
                    Plan towards your future by investing with Ardilla. Grow your money <br />
                    confidently and securely with the available investment opportunities.
                </p>
                <button className="mt-8 inline-flex items-center bg-transparent border border-[#3D0072] text-[#3D0072] py-3 px-6 rounded-full hover:bg-[#e8e8e8] transition">
                    Invest with Ardilla (Coming Soon)
                    <img alt="arrow-right" src={send} className="inline-block ml-2" />
                </button>
            </div>
        </section>
    );
}