import React, { useState } from 'react';
import CarouselBanner from './CarouselBanner';
import Footer from './../Shared/Footer/Footer';
import Parts from '../Parts/Parts';
import ShowReviews from '../Reviews/ShowReviews';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import JoinUs from './JoinUs/JoinUs';
import AllProductInclude from './AllProductInclude/AllProductInclude';
import Instruction from '../../Instruction';

const Home = ({isOpenMOdal, setIsModalOpen}) => {

    
    return (
        <div className="grid grid-cols-1 gap-10">
            {
                isOpenMOdal &&
                <Instruction setIsModalOpen={setIsModalOpen}></Instruction>
            }

            <CarouselBanner></CarouselBanner>
            <JoinUs></JoinUs>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <ShowReviews></ShowReviews>
            <AllProductInclude></AllProductInclude>
            <Footer></Footer>
        </div>
    );
};

export default Home;