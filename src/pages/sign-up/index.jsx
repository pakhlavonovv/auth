import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signUpValidationSchema } from '../utils/validation'
import axios from 'axios';

const Index = () => {
  const [ form, setForm ] = useState({})
  const [disabled, setDisabled] = useState(false )
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(10)
  const navigate = useNavigate()
  const initalValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  }
  const handleSubmit = async(value) => {
    console.log(value)
    try {
        const res = await axios.post(
            "https://texnoark.ilyosbekdev.uz/auth/admin/sign-up", value
        )
        if(res.status == 201){
            navigate("/")
        }
    } catch (error) {
        console.log(error)
    }
  } 

  return (
    <div>
      <div className="container mt-5">
      <ToastContainer />
        <div className="row">
          <div className="col-md-4 offset-3">
            <div className="card" style={{width: "500px"}}>
              <div className="card-header">
                <h1 className='text-center'>Sign Up</h1>
              </div>
              <div className="card-body">
                <Formik initialValues={initalValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
                  <Form id='sign-in' style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px"
                  }}>
                    <Field
                    name="first_name"
                    as={TextField}
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="First name"
                    helperText={
                      <ErrorMessage name='first_name' component="p" className='text-danger fs-6'/>
                    }
                    />
                    <Field 
                    name="last_name"
                    as={TextField}
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="Last name"
                    helperText={
                    <ErrorMessage 
                      name='last_name'
                      component="p"
                      className='text-danger fs-6'
                    />
                    }
                    />
                      <Field 
                    name="phone_number"
                    as={TextField}
                    type="number"
                    fullWidth
                    variant="outlined"
                    label="Phone number"
                    helperText={
                    <ErrorMessage 
                      name='phone_number'
                      component="p"
                      className='text-danger fs-6'
                    />
                    }
                    />
                       <Field 
                    name="email"
                    as={TextField}
                    type="email"
                    fullWidth
                    variant="outlined"
                    label="Email address"
                    helperText={
                    <ErrorMessage 
                      name='email'
                      component="p"
                      className='text-danger fs-6'
                    />
                    }
                    />
                     <Field 
                    name="password"
                    as={TextField}
                    type="password"
                    fullWidth
                    variant="outlined"
                    label="Password"
                    helperText={
                    <ErrorMessage 
                      name='password'
                      component="p"
                      className='text-danger fs-6'
                    />
                    }
                    />
                  </Form>
                </Formik>

              </div>
              <div className="card-footer">
                <center>
              <Button variant='contained' color='success' type='submit' form="sign-in">Save</Button>
                </center>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index