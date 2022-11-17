import React from 'react';
import './CustomerFeedback.css'

const CustomerFeedback = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h2 className='d-flex justify-content-center mb-3'>Customer Feedback</h2>
            <div className='items-container text-center'>
                <div className='customer item'>
                    <div className='customerImage'>
                        <img src="https://i.ibb.co/Sf0Dykz/images-1.jpg" alt="" />
                    </div>
                    <p>When you work in a warehouse you will spend a lot of time working with other people. The best thing is working together to complete tasks more quickly and effectively. It can be very rewarding to achieve something with another person.</p>
                </div>
                <div className='customer item'>
                    <div className='customerImage'>
                        <img src="https://i.ibb.co/ypVFftM/images-2.jpg" alt="" />
                    </div>
                    <p>Warehouses need to make up orders, move and store items and keep records of inventory. Tasks often involve sorting, assembly, packing and labelling. There is also a lot of physical work that needs to be done. Items need to be loaded onto trucks or put onto pallets and stacked safely in the right place. </p>
                </div>
                <div className='customer item'>
                    <div className='customerImage'>
                        <img src="https://i.ibb.co/cCtdJ10/images-3.jpg" alt="" />
                    </div>
                    <p>It can also feel good just to be active when you’re working. According to Nicholas, it is good to be “moving around not just sitting on my butt all day.” In some jobs, you have to sit down all day, but you have to move around a lot when working in a warehouse.</p>
                </div>

            </div>
        </div>
    );
};

export default CustomerFeedback;