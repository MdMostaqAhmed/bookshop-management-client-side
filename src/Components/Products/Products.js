import React, { useEffect, useState } from 'react';
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
                            <hr class="style1"></hr>
                            <h5><strong> Price: {item.price}</strong></h5>
                            <hr class="style1"></hr>
                            <spin><strong>Supplier: {item.supplier}</strong></spin> <br />
                            <hr class="style1"></hr>
                            <spin><strong>Available: {item.available} </strong></spin> <br />
                            <hr class="style1"></hr>
                            <spin><strong>Sold: {item.sold}</strong></spin> <br />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;