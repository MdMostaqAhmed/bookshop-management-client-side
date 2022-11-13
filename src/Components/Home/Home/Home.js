import React from 'react';
import LimitedProducts from '../../LimitedProducts/LimitedProducts';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback';

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