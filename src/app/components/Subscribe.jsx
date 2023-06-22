import React from 'react'
import { useFormik } from 'formik'

const Subscribe = () => {
    const onSubmit = (values,action) => {
        console.log("submitted");
        console.log(values);
    }
    const {values, errors, handleChange, handleSubmit, touched} = useFormik({
        initialValues : {
            email : ""
        },
        onSubmit,
    })
  return (
    <div className='bg-lime-400 grid place-items-center py-16'>
        <div className='footerStyle max-w-lg bg-lime-600 p-4 rounded-md'>
            <h2 className='text-lime-200'>subscribe our newsletter and get 10% off!!</h2>
            <form className='' action="" onSubmit={handleSubmit}></form>
            <div className='w-full'>
                <input className='w-full border border-lime-300 rounded-sm mb-4 py-2 px-4 bg-transparent placeholder:text-lime-200' id='email' name="email" value={values.email} onChange={handleChange} placeholder='Email' type="email" /></div>
            <div className='subscribeBtn'>
                <button type='submit' onClick={handleSubmit} className='w-full cursor-pointer capitalize text-base text-center '>subscribe</button>
            </div>
            <h2 className='mt-4 capitalize text-xs text-lime-200 font-light'>get regular updates on our product with our newsletter.</h2>
        </div>
    </div>
  )
}

export default Subscribe