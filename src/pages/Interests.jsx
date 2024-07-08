import React from 'react'
import InterestNavbar from '../components/Navbar/interest-navbar'
import InterestsHero from '../components/Hero/interests-hero'
import CountOn from '../components/CountOn'
import HowItWorks from '../components/HowItWorks'
const Interests = () => {
    return (
        <div>
            <InterestNavbar />
            <InterestsHero />
            <CountOn />
            <HowItWorks />
        </div>
    )
}

export default Interests