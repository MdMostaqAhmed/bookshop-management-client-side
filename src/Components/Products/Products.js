import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div className='container'>
            <h1 className='w-50 mx-auto'>Available Products</h1>
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
                            <Link to={`/updateBook/${item._id}`}><button className='btn btn-primary'>Update</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;