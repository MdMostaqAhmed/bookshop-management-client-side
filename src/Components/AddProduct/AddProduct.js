import React from 'react';

const AddProduct = () => {
    const addBook = book => {
        const url = 'http://localhost:5000/';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (

        <div>
            <h1>Add Product</h1>
        </div>
    );
};

export default AddProduct;