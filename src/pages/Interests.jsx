import React from 'react'
import InterestNavbar from '../components/Navbar/interest-navbar'
import InterestsHero from '../components/Hero/interests-hero'
import CountOn from '../components/CountOn'
import HowItWorks from '../components/HowItWorks'
import Faq from "../components/Faq";
const Interests = () => {
    return (
        <div>
            <InterestNavbar />
            <InterestsHero />
            <CountOn />
            <HowItWorks />
            <Faq />
        </div>
    )
}

export default Interests