import React from 'react';
import warehouse from '../../images/warehouse.jpg'

const AboutUs = () => {
    return (
        <div className='w-50 mx-auto'>
            <h1 className='d-flex justify-content-center'>About us</h1>
            <img style={{ width: "600px" }} src={warehouse} alt="" /> <br /> <br />
            <span className='mb-5'>
                Now that we know why warehouse management is important, what should one look for in a book before purchasing it? Just like any good thriller or tale of fiction, a good guide to the subject has several points and details that provide the reader with useful takeaways and acts as a lifetime asset. <br /> <br />

                First and foremost, the book must be easy to read. While the topic might be difficult to digest for a beginner, a good book makes it interesting, while at the same time, ensuring that the beginner is up to speed on the relevant topics. <br /> <br />

                Next, it should cover all the major topics on the field including but not limited to logistical theories, management of goods and inventory, the use of technology to improve the process flow, the steps to be followed at a warehouse, general layout, and good practices. Once the reader has an idea of these concepts, it is easier for them to apply them in real life. <br /> <br />

                This brings us to the next point- a good book explains the theory well, but an excellent book shows you how to practically apply it. Any book that takes up a hands-on approach to the subject is bound to be more useful. In warehousing related books, always look for real-life and practical examples that will show you how to implement the various theorems and concepts in reality <br /> <br />
            </span>
        </div>
    );
};

export default AboutUs;