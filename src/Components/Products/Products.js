import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    useEffect(() => {
        const url = `http://localhost:5000/books?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [page, size])

    useEffect(() => {
        const url = `http://localhost:5000/bookCount`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 6);
                setPageCount(pages);
            })
    }, [])




    return (
        <div className='container mt-5'>
            <h1 className='d-flex justify-content-center mb-3'>Available Products</h1>
            <div className='items-container'>
                {
                    items.map((item, index) => <div key={index} className='item'>
                        <div className='bookImage'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='ms-2 mt-2'>
                            <h3>Book Name: {item.name}</h3>
                            <hr></hr>
                            <span><strong>Description:</strong> {(item.description).slice(0, 190)}</span>
                            <hr></hr>
                            <h5><strong> Price: {item.price}</strong></h5>
                            <hr ></hr>
                            <span><strong>Supplier: {item.supplier}</strong></span> <br />
                            <hr ></hr>
                            <span><strong>Available: {item.available} </strong></span> <br />
                            <hr ></hr>
                            <span><strong>Sold: {item.sold}</strong></span> <br />
                            <hr></hr>
                            <div className='d-flex justify-content-around mb-1'>
                                <Link to={`/updateBook/${item._id}`}><button className='btn btn-primary'>Update</button></Link>
                                <Link to={`/manageItem/${item._id}`}><button className='btn btn-primary'>Manage</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className="pagination mt-3 d-flex justify-content-center">
                {[...Array(pageCount).keys()].map((number, index) => (
                    <button
                        key={index}
                        className={page === number ? "selected" : ""}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>))}
                <select onChange={e => setSize(e.target.value)}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select>

            </div>
        </div>
    );
};

export default Products;