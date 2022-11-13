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
                    <p>I purchased an iMac-2022 for the work place. It was delivered on time and very quickly from the point of ordering.The product quality is very good</p>
                </div>
                <div className='customer item'>
                    <div className='customerImage'>
                        <img src="https://i.ibb.co/ypVFftM/images-2.jpg" alt="" />
                    </div>
                    <p>I purchased an iMac-2022 for the work place. It was delivered on time and very quickly from the point of ordering.The product quality is very good</p>
                </div>
                <div className='customer item'>
                    <div className='customerImage'>
                        <img src="https://i.ibb.co/cCtdJ10/images-3.jpg" alt="" />
                    </div>
                    <p>I purchased an iMac-2022 for the work place. It was delivered on time and very quickly from the point of ordering.The product quality is very good</p>
                </div>
                <div className='customer item'>
                    <div className='customerImage'>
                        <img src="https://i.ibb.co/g3R8mdx/images-4.jpg" alt="" />
                    </div>
                    <p>I purchased an iMac-2022 for the work place. It was delivered on time and very quickly from the point of ordering.The product quality is very good</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;