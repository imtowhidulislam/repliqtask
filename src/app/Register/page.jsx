"use client"
import {RiShoppingBagFill} from "react-icons/ri";
import { useFormik } from 'formik';
import { formSchema } from "./schemas/page";

const page = () => {
    const onSubmit = (action,values) => {
        console.log(values);
        console.log(action);
        console.log('submitted');
    }
    const {values,handleChange, touched,errors,handleBlur,handleSubmit} = useFormik({
        initialValues:{
            firstName : "",
            lastName : "",
            email : "",
            image : "",
            password : "",
        },
        validationSchema: formSchema,
        onSubmit,
    })
    console.log(values);
    console.log(errors);
  return (
    <>
        <div className="contact flex items-center justify-center">
            <form onSubmit={handleSubmit} className='registerForm w-full max-w-md px-4 rounded-md overflow-hidden my-8 py-6 border border-gray-200 bg-[#14141483] backdrop-filter backdrop-blur-md'>
                <div className='flex items-center justify-center text-6xl text-cyan-700 pb-3'>
                    <div>
                        <h2 className='uppercase text-blue-600 text-4xl font-bold flex gap-2 items-center'><span className='text-green-600'><RiShoppingBagFill /></span>repliq</h2>
                    </div>
                </div>
                <div className="pb-4">
                    <h2 className='text-center text-xl font-bold text-[#ffff] uppercase'>sign up</h2>
                </div>

                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold' htmlFor="first name">First Name</label>
                    <input type="text" id="firstname" value={values.firstName} onChange={handleChange} onBlur={handleBlur} className={errors.lastName && touched.lastName ? 'form w-full placeholder:capitalize pl-4 border-2 border-red-500' : "'form w-full placeholder:capitalize pl-4'"}  />
                </div>

                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold capitalize' htmlFor="lastname">Last Name</label>
                    <div>
                        <input type="text" name='lastname' onBlur={handleBlur} onChange={handleChange} value={values.lastName} className={errors.lastName && touched.lastName ? 'form w-full placeholder:capitalize pl-4 border-red-500' : "'form w-full placeholder:capitalize pl-4'"} placeholder='enter your last name' />
                        
                    </div>
                </div>
                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold capitalize' htmlFor="email">Email</label>
                    <input type="email" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} className={errors.lastName && touched.lastName ? 'form w-full placeholder:capitalize pl-4 border-2 border-red-500' : "'form w-full placeholder:capitalize pl-4'"} placeholder='enter your email' />
                </div>
                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold capitalize' htmlFor="image">Image</label>
                    <input type="file" name='file' onBlur={handleBlur} onChange={handleChange} value={values.image} className={errors.lastName && touched.lastName ? 'form w-full placeholder:capitalize pl-4 border-2 border-red-500' : "'form w-full placeholder:capitalize pl-4'"}  placeholder='enter your Image' />
                </div>
                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold capitalize' htmlFor="password">Password</label>
                    <input type="password" name='password' onBlur={handleBlur} onChange={handleChange} value={values.password} className={errors.lastName && touched.lastName ? 'form w-full placeholder:capitalize pl-4 border-2 border-red-500' : "'form w-full placeholder:capitalize pl-4'"}  placeholder='enter you password' />
                </div>

                <div className='mt-12 w-full '>
                    <button type='submit' onClick={handleSubmit} className='rounded-md capitalize w-full font-bold text-base bg-cyan-700 text-gray-100 hover:bg-cyan-300 hover:text-gray-700 transition-all duration-200 ease-out cursor-pointer py-4 px-8'>submit</button>
                </div>

                {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
            </form>
        </div>
        </>
  )
}

export default page