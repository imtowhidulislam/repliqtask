import React, { useEffect, useState } from 'react'
import Form from '../Util/Form';

const Register = () => {
  const [formData ,setFormData] = useState({personPhone: "", password: ""});
  const [person, setPerson] = useState([]);
  const [toggleAction, setToogleAction] = useState(false);
  
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.personPhone && formData.password){
      const personId = new Date().getTime().toString();

      const newPerson = {...formData, personId};
      setPerson([...person, newPerson]);
      setFormData({
        personPhone:"",
        password:""
      })
    }
  }

  const toggleForm = () =>  {
    setToogleAction(!toggleAction);
  }
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(person));
  },[person])

  useEffect(() => {
    console.log(toggleAction);
  },[toggleAction])


    return (
    <div className='contact px-2 md:px-16 py-24' >
        <div className='container flex items-center justify-center'>
            {
                toggleAction ? (<Form handleChange={handleChange} handleSubmit={handleSubmit} toggleForm={toggleForm} formData={formData} signup="sign up" account="have already an account? " acctionType="sign in" />) : (            <Form handleChange={handleChange} handleSubmit={handleSubmit} toggleForm={toggleForm} formData={formData} signup="sign in" account="don't have an account? " acctionType="sign up" />)
            }

        </div>
    </div>
  )
}

export default Register