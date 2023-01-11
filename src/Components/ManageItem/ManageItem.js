import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const { name, price, supplier, available, sold } = book;
    const url = `https://bookshop-management-server-side-production.up.railway.app/book/${id}`
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setBook(data))
    }, [book]);



    const handleRestock = event => {
        event.preventDefault();
        const newAvailable = parseInt(book.available) + 1;
        const newSold = parseInt(book.sold) + 0;
        console.log(newAvailable, newSold);

        const available = newAvailable;
        const sold = newSold;
        const data = { available, sold }
        const url = `https://bookshop-management-server-side-production.up.railway.app/books/${id}`
        axios.put(url, data).then(response => { console.log(response); })

    }

    const handleDelivered = event => {
        event.preventDefault();
        if (parseInt(book.available) > 0) {
            const newAvailable = parseInt(book.available) - 1;
            const newSold = parseInt(book.sold) + 1;
            console.log(newAvailable, newSold);

            const available = newAvailable;
            const sold = newSold;
            const data = { available, sold }
            const url = `https://bookshop-management-server-side-production.up.railway.app/books/${id}`
            axios.put(url, data).then(response => { console.log(response); })
        }
    }


    return (
        <div className='w-50 mx-auto border my-3'>
            <h2 className='d-flex justify-content-center my-3'>Manage Item</h2>

            <div className='border'>
                <div className='bookImage'>
                    <img src={book.img} alt="" />
                </div>
                <div className='ms-2 mt-2'>
                    <h3>Book Name: {name}</h3>
                    <hr></hr>
                    <h5><strong> Price: {price}</strong></h5>
                    <hr ></hr>
                    <span><strong>Supplier: {supplier}</strong></span> <br />
                    <hr ></hr>
                    <span><strong>Available: {available} </strong></span> <br />
                    <hr ></hr>
                    <span><strong>Sold: {sold}</strong></span> <br />
                    <hr></hr>
                    <div className='mb-2 d-flex justify-content-around'>
                        <button onClick={handleRestock} className='btn btn-primary'>Restock</button>
                        <button onClick={handleDelivered} className='btn btn-primary'>Delivered</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageItem;