import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItem?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data);
        }
        getItems();
    }, [user])

    const handleBookDelete = id => {
        const proceed = window.confirm("Are sure to Delete the Item");
        if (proceed) {
            console.log(id)
            toast("Item Deleted")
            const url = `http://localhost:5000/myItem/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining)
                    }
                })
        }


    }

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
                            <span>Description: {item.description}</span>
                            <hr></hr>
                            <h5><strong> Price: {item.price}</strong></h5>
                            <hr ></hr>
                            <span><strong>Supplier: {item.supplier}</strong></span> <br />
                            <hr ></hr>
                            <span><strong>Available: {item.available} </strong></span> <br />
                            <hr ></hr>
                            <span><strong>Sold: {item.sold}</strong></span> <br />
                            <hr></hr>
                            <button className='btn btn-primary w-100 mx-auto'
                                onClick={() => handleBookDelete(item._id)}>Delete</button>
                        </div>
                    </div>)
                }


            </div>


        </div>
    );
};

export default MyItems;