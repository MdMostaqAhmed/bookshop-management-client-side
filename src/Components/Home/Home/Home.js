import React from 'react';
import LimitedProducts from '../../LimitedProducts/LimitedProducts';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LimitedProducts></LimitedProducts>
        </div>
    );
};

export default Home;