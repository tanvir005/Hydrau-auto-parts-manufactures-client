import React from 'react';
import CarouselBanner from './CarouselBanner';
import Footer from './../Shared/Footer/Footer';
import BusinessSummary from './BusinessSummary';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
           <CarouselBanner></CarouselBanner>
           <Parts></Parts>

           <BusinessSummary/>


           <Footer></Footer>
          
        </div>
    );
};

export default Home;