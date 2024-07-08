import React from 'react';

const CountOn = () => {
    return (
        <section className="bg-white lg:px-32 md:px-16 px-8 font-cabinet lg:py-40 md:py-28 py-20">
            <h1 className="text-5xl md:text-5xl lg:text-[4rem] font-bold text-[#3D0072] mb-16">Interest you can count on</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#8807F7] rounded-full"></div>
                        <div className="h-[8rem] w-1 bg-[#8807F7]"></div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold  text-[#3D0072]">More Interest</h3>
                        <p className="text-[#3D0072] text-sm font-normal leading-8 max-w-md">Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#8807F7] rounded-full"></div>
                        <div className="h-[8rem] w-1 bg-[#8807F7]"></div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold  text-[#3D0072]">Values</h3>
                        <p className="text-[#3D0072] text-sm font-normal leading-8 max-w-md">Your values matter to us and we are 100% committed to upholding those. Whether it is with Ardilla or the Ardilla saving plans.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#8807F7] rounded-full"></div>
                        <div className="md:h-full h-[6rem] w-1 bg-[#8807F7]"></div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold  text-[#3D0072]">Transparency</h3>
                        <p className="text-[#3D0072] text-sm font-normal leading-8 max-w-md">No hidden charges and no vague deductions. Save with Ardilla and get your full interest.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#8807F7] rounded-full"></div>
                        <div className="h-full w-1 bg-[#8807F7]"></div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold  text-[#3D0072]">Complete Withdrawals</h3>
                        <p className="text-[#3D0072] text-sm font-normal leading-8 max-w-md">Withdraw your entire savings + interest upon maturity. No minimum balances.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CountOn;

