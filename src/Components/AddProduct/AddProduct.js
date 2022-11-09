import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        const url = `http://localhost:5000/book`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        event.target.reset();

    }

    return (

        <div className='login mt-3'>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='mt-2'
                    type="text"
                    placeholder="Book Name"
                    {...register("name", { required: true })}
                /> <br />

                <input
                    className='mt-2'
                    type="text"
                    placeholder="Product Photo URL"
                    {...register("img", { required: true })}
                /> <br />

                <input
                    className='mt-2'
                    type="number"
                    placeholder="Product Price"
                    {...register("price", { required: true })}
                /> <br />
                <input
                    className='mt-2'
                    type="text"
                    placeholder="Product Supplier"
                    {...register("supplier", { required: true })}
                /> <br />

                <input
                    className='mt-2'
                    type="number"
                    placeholder="Available Product"
                    {...register("available", { required: true })}
                /> <br />
                <input
                    className='mt-2'
                    type="number"
                    value="0"
                    placeholder="Sold Product"
                    {...register("sold", { required: true })}
                /> <br />




                <input type="submit" className="btn btn-primary mt-2" value="Add Now" />
            </form>
        </div>
    );
};

export default AddProduct;