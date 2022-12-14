import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';



const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        const url = `https://bookshop-management-server-side-production.up.railway.app/book`;
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
                toast("Item Added");

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
                    type="text"
                    placeholder="Description"
                    {...register("description", { required: true })}
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
                    type="email"
                    placeholder={user.email}
                    value={user.email}
                    {...register("email", { required: true })}
                /> <br />
                <input
                    className='mt-2'
                    type="number"

                    placeholder="Sold Product Number"
                    {...register("sold", { required: true })}
                /> <br />


                <ToastContainer />

                <input type="submit" className="btn btn-primary mt-2" value="Add Now" />
            </form>
        </div>
    );
};

export default AddProduct;