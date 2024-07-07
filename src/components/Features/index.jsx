import React from 'react';
import dreams from '../../assets/images/dreams.png';
import dib from '../../assets/images/dib.png';
import grit from '../../assets/images/grit.png';
import vault from '../../assets/images/vault.png';
import send from '../../assets/images/send.png';
import './index.css'
export default function Features() {
    return (
        <div className="min-h-screen bg-[#1b0132] text-white pt-16 md:pt-24 lg:pt-32 lg:px-32 md:px-16 px-8  overflow-hidden">
            <div className=" mx-auto text-left">
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-cabinet text-white font-extrabold mb-4">Access More With Your Money</h1>
                <p className="mb-8 text-white font-cabinet font-normal text-sm md:text-base lg:text-lg max-w-3xl mx-auto md:mx-0">
                    Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your finger tips. Why not take advantage today?
                </p>
                <button className="bg-transparent border border-white text-white font-cabinet font-normal py-3 px-6 rounded-full hover:bg-[#2f0253] hover:text-white transition">
                    Learn more about savings
                    <img alt="arrow-right" src={send} className="inline-block ml-2" />
                </button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#29014B] shadow-[#8807F7] p-6 md:p-12 lg:px-[8rem] lg:pt-[5rem] shadow-2xl max-w-4xl mx-auto" id='main-mans'>
                <div className="bg-transparent hover:bg-[#43027E] transition p-6 rounded-xl shadow-lg text-left">
                    <div className="mb-8">
                        <img alt="dib-icon" className='shadow-[#eab305] shadow-2xl rounded-full' src={dib} />
                    </div>
                    <h2 className="text-xl font-bold font-cabinet text-[#F0FDFA] mb-2">DIB</h2>
                    <p className="mb-4 font-cabinet font-normal text-sm text-white">Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.</p>
                    <a href="#" className="font-cabinet font-bold text-sm text-white">Learn More</a>
                </div>
                <div className="bg-transparent hover:bg-[#43027E] transition p-6 rounded-xl shadow-lg text-left">
                    <div className="mb-8">
                        <img alt="dreams-icon" className='shadow-[#e8356d] shadow-2xl rounded-full' src={dreams} />
                    </div>
                    <h2 className="text-xl font-bold font-cabinet text-[#F0FDFA] mb-2">Dreams</h2>
                    <p className="mb-4 font-cabinet font-normal text-sm text-white">Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.</p>
                    <a href="#" className="font-cabinet font-bold text-sm text-white">Learn More</a>
                </div>
                <div className="bg-transparent hover:bg-[#43027E] transition p-6 rounded-xl shadow-lg text-left">
                    <div className="mb-8">
                        <img alt="vault-icon" className='shadow-[#8708f7] shadow-2xl rounded-full' src={vault} />
                    </div>
                    <h2 className="text-xl font-bold font-cabinet text-[#F0FDFA] mb-2">Vault</h2>
                    <p className="mb-4 font-cabinet font-normal text-sm text-white">Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.</p>
                    <a href="#" className="font-cabinet font-bold text-sm text-white">Learn More</a>
                </div>
                <div className="bg-transparent hover:bg-[#43027E] transition p-6 rounded-xl shadow-lg text-left">
                    <div className="mb-8">
                        <img alt="grit-icon" className='shadow-[#21c55d] shadow-2xl rounded-full' src={grit} />
                    </div>
                    <h2 className="text-xl font-bold font-cabinet text-[#F0FDFA] mb-2">Grit</h2>
                    <p className="mb-4 font-cabinet font-normal text-sm text-white">Become a VIP when you save more money with us. Enjoy better benefits.</p>
                    <a href="#" className="font-cabinet font-bold text-sm text-white">Learn More</a>
                </div>
            </div>
        </div>
    );
}