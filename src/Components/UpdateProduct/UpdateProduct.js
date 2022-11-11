import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleBookDelete = id => {
        const proceed = window.confirm("Are sure to Delete the Item");
        if (proceed) {
            console.log(id)
            const url = `http://localhost:5000/book/${id}`
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
        <div className='w-50 mx-auto'>
            <h2 className='mt-3 mb-5 updateHeading'>Update Product</h2>
            <div className='container'>
                {
                    items.map((item, index) => <div key={index} className='mt-2 '>

                        <img src={item.img} alt="" style={{ width: '20px' }} />
                        <span><strong> {item.name}</strong></span>
                        <> </>
                        <button className='btn btn-primary' onClick={() => handleBookDelete(item._id)}>Delete</button>
                        <> </>
                        <Link to={`/updateBook/${item._id}`}>
                            <button className='btn btn-primary'>Edit</button>
                        </Link>



                    </div>)
                }
            </div>
        </div>
    );
};

export default UpdateProduct;