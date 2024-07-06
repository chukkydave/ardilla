import React from 'react';
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import pop1 from "../../assets/images/pop1.png";
import pop2 from "../../assets/images/pop2.png";

const Hero = () => {
    return (
        <section className=" bg-[#240053] h-screen flex flex-col  items-center justify-center text-white relative overflow-hidden">
            <div className="text-center lg:pt-[16rem] pt-[10rem] md:w-4/4 w-3/4">
                <h1 className="md:text-6xl text-5xl font-cabinet lg:text-[95px] font-extrabold lg:leading-[90px]">Your Access To More</h1>
                <p className="text-sm font-cabinet lg:text-base my-5 lg:max-w-[46rem] max-w-[30rem] mx-auto">Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</p>
                <button className="bg-white text-[#240053] font-cabinet px-10 py-4 rounded-full text-sm">Get Started</button>
            </div>
            <div className="relative  lg:mt-4 md:mt-[5rem] mt-[4rem] flex justify-center items-center">
                <div className="relative z-10 " >
                    <img src={phone1} alt="Phone 1" className=" md:w-auto lg:max-w-md md:max-w-[20rem] max-w-[15rem] " />
                    <img src={pop1} alt="Pop 1" className="absolute md:top-14 top-8 md:right-5 right-5 w-auto md:h-[2.5rem] lg:h-[5.5rem] h-[1.5rem]" />
                </div>
                <div className="relative z-10 lg:-ml-[7em] md:-ml-16 -ml-14 ">
                    <img src={phone2} alt="Phone 2" className=" md:w-auto lg:max-w-md md:max-w-[20rem] max-w-[15rem]" />
                    <img src={pop2} alt="Pop 2" className="absolute md:bottom-[7rem] bottom-[4rem] md:left-7 left-6 w-auto lg:h-[5.5rem] md:h-[4.5rem] h-[2.5rem]" />
                </div>
            </div>
        </section>
    );
}

export default Hero;

