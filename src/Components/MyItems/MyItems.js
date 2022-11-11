import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myItem?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='myItemHeading mt-3'>My Items</h2>
            <div className='items-container'>
                {
                    items.map((item, index) => <div key={index} className='item'>
                        <div className='bookImage'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='ms-2 mt-2'>
                            <h3>Book Name: {item.name}</h3>
                            <hr></hr>
                            <h5><strong> Price: {item.price}</strong></h5>
                            <hr ></hr>
                            <span><strong>Supplier: {item.supplier}</strong></span> <br />
                            <hr ></hr>
                            <span><strong>Available: {item.available} </strong></span> <br />
                            <hr ></hr>
                            <span><strong>Sold: {item.sold}</strong></span> <br />
                            <hr></hr>
                        </div>
                    </div>)
                }


            </div>


        </div>
    );
};

export default MyItems;