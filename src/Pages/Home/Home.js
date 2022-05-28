import React from 'react';
import CarouselBanner from './CarouselBanner';
import Footer from './../Shared/Footer/Footer';
import BusinessSummary from './BusinessSummary';
import Parts from '../Parts/Parts';
import DisplayReviews from './DisplayReviews';
import ShowReviews from '../Reviews/ShowReviews';

const Home = () => {
    return (
        <div className="grid grid-cols-1 gap-10">
           <CarouselBanner></CarouselBanner>
           <Parts></Parts>
           <BusinessSummary/>
           <ShowReviews/>
           <Footer></Footer>
          
        </div>
    );
};

export default Home;