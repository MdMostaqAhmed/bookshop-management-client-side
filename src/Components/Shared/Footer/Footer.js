import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import payment from '../../../images/payment.png'

const Footer = () => {
    return (
        <div className='container footer mt-5 mb-2'>
            <div className='footer-link'>
                <h4>Office Information</h4>
                <Link className='footer-link'> Who We Are ? </Link> <br />
                <Link className='footer-link'> Corporate Responsibility </Link> <br />
                <Link className='footer-link'> Business Laws </Link> <br />
                <Link className='footer-link'> Careers </Link> <br />
                <Link className='footer-link'> Privacy Policy </Link> <br />
                <Link className='footer-link'> Terms of Use </Link> <br />
            </div>


            <div>
                <h4>My Information</h4>
                <Link className='footer-link'> Sitemap </Link> <br />
                <Link className='footer-link'> Privacy Policy </Link> <br />
                <Link className='footer-link'> My Account </Link> <br />
                <Link className='footer-link'> Advanced Search </Link> <br />
                <Link className='footer-link'> Contact Us </Link> <br />
                <Link className='footer-link'> My Wishlist </Link> <br />

            </div>

            <div>
                <h4>Office Hours</h4>
                <span>
                    Monday To Friday : 8.00 AM - 8.00 PM <br />
                    Saturday To Sunday : 7.30 AM - 9.30 PM
                </span>

            </div>

            <div>
                <img src={payment} alt="" />
            </div>

            <div>

            </div>


        </div>
    );
};

export default Footer;