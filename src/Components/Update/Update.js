import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Update.css'

const Update = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const url = `http://localhost:5000/book/${id}`
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setBook(data))
    }, [])
    return (
        <div className='container mt-3 updateBook'>
            <h2>Update or Edit: {book.name}</h2>
            <form>
                <input className='mt-2' type="text" name="name" placeholder='Book Name' required /> <br />
                <input className='mt-2' type="text" name="img" placeholder='URL' required /> <br />
                <input className='mt-2' type="number" name="price" placeholder='Book Price' required /> <br />
                <input className='mt-2' type="text" name="supplier" placeholder='Supplier Name' required /> <br />
                <input className='mt-2' type="number" name="available" placeholder='Available Product Number' required /> <br />
                <input className='mt-2' type="number" name="sold" placeholder='Sold Product Number' required /> <br />
                <input className='btn btn-primary mt-2' type="submit" value="Update Book" />
            </form>
        </div>
    );
};

export default Update;