import React from 'react';
import playIcon from '../../assets/images/polygon.png';
import testimonial1 from '../../assets/images/test1.png';
import testimonial2 from '../../assets/images/test2.png';
import testimonial3 from '../../assets/images/test3.png';
import './index.css';

export default function Testimonials() {
    const testimonials = [
        {
            src: testimonial1,
            title: 'MD - Miss Oyinye Dallas',
            description: 'What is Ardilla and its benefits?',
        },
        {
            src: testimonial2,
            title: 'User Testimonial',
            description: 'Lorem ipsum dolor sit amet.',
        },
        {
            src: testimonial3,
            title: 'User Testimonial',
            description: 'Lorem ipsum dolor sit amet.',
        },
        {
            src: testimonial3,
            title: 'User Testimonial',
            description: 'Lorem ipsum dolor sit amet.',
        },
        {
            src: testimonial3,
            title: 'User Testimonial',
            description: 'Lorem ipsum dolor sit amet.',
        },
    ];

    return (
        <section className="bg-gray-100 lg:pl-32  md:pl-16 pl-8 py-24">
            <div className="text-left mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold font-cabinet text-[#3D0072]">Don’t Take Our <span className="text-[#E8356D]">Word</span> For It</h1>
                <p className="mt-4 font-cabinet text-base text-[#3D0072]">Listen to testimonials from Ardilla users building wealth</p>
            </div>
            <div className="overflow-x-auto">
                <div className="flex space-x-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={testimonial.src} alt={`Testimonial ${index + 1}`} className="rounded-lg" />
                            <div className="overlay">
                                <div className="play-icon bg-gray-400 rounded-full flex items-center justify-center">
                                    <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
                                </div>
                                <div className="text-overlay">
                                    <h3 className="text-white font-cabinet text-lg font-bold">{testimonial.title}</h3>
                                    <p className="text-white font-cabinet text-sm">{testimonial.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}