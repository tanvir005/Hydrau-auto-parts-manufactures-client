import React from 'react';
import CarouselBanner from './CarouselBanner';
import Footer from './../Shared/Footer/Footer';
import Parts from '../Parts/Parts';
import ShowReviews from '../Reviews/ShowReviews';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import JoinUs from './JoinUs/JoinUs';
import AllProductInclude from './AllProductInclude/AllProductInclude';

const Home = () => {
    return (
        <div className="grid grid-cols-1 gap-10">
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