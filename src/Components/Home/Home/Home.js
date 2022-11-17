import React from 'react';
import CustomerFeedback from '../../CustomerFeedback/CustomerFeedback';
import LimitedProducts from '../../LimitedProducts/LimitedProducts';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LimitedProducts></LimitedProducts>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;