import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Update.css'

const Update = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const url = ` https://bookshop-management-server-side-production.up.railway.app/book/${id}`
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setBook(data))
    }, []);

    const handleUpdateBook = event => {
        event.preventDefault();
        const name = event.target.name.value
        const img = event.target.img.value
        const description = event.target.description.value
        const price = event.target.price.value
        const supplier = event.target.supplier.value
        const available = event.target.available.value
        const sold = event.target.sold.value
        const book = { name, img, description, price, supplier, available, sold }

        const url = `https://bookshop-management-server-side-production.up.railway.app/book/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Update successfully")
            })
    }

    return (
        <div className='container mt-3 updateBook'>
            <div className='text-align-center'>
                <h2 >Update Book</h2> <br />
                <img style={{ width: "200px" }} src={book.img} alt="" /> <br />
                <h4>{book.name}</h4>

            </div>

            <form onSubmit={handleUpdateBook}>
                <input className='mt-2' type="text" name="name" placeholder='Book Name' required autoComplete='off' /> <br />
                <input className='mt-2' type="text" name="img" placeholder='URL' required autoComplete='off' /> <br />
                <input className='mt-2' type="text" name="description" placeholder='Description' required autoComplete='off' /> <br />
                <input className='mt-2' type="number" name="price" placeholder='Book Price' required autoComplete='off' /> <br />
                <input className='mt-2' type="text" name="supplier" placeholder='Supplier Name' required autoComplete='off' /> <br />
                <input className='mt-2' type="number" name="available" placeholder='Available Product Number' required autoComplete='off' /> <br />
                <input className='mt-2' type="number" name="sold" placeholder='Sold Product Number' required autoComplete='off' /> <br />
                <input className='btn btn-primary mt-2' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;


