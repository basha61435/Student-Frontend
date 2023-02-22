import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function StudentRegistation() {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState();
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Password, setPassword] = useState('')
    const navigate = useNavigate();
    const Register = () => {
        axios.post(`http://localhost:2520/saveStudentDetails`, {
            name: Name,
            age: Age,
            email: Email,
            address: Address,
            password: Password
        }).then((success) => {
            // toast.success('Registration Successfull', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            //     });
            alert("Registration Successfull")
             navigate('/')
        }, (err) => {
            alert('Registation Fail');
            console.log(err);
        });
    }
    return (

        <div className='container mt-5  '>
            
            <center>
                <div className='card   bg-light' style={{ width: '50%' }}>
                    <div className='card-body'>
                    <h3 className='text-primary m-4'>Student Registration</h3>
                        <div className='mb-3'>
                            <TextField label="Name" variant="outlined"
                                placeholder='Enter Name'
                                type="text" style={{ width: '50%' }} value={Name}
                                onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='mb-3'>
                            <TextField label="Age" variant="outlined"
                                placeholder='Enter Age' type='number'
                                style={{ width: '50%' }} value={Age}
                                onChange={(e) => setAge(e.target.value)} required />
                        </div>
                        <div className='mb-3'>
                            <TextField label="Email" variant="outlined"
                                placeholder='Enter Email' type='email' style={{ width: '50%' }}
                                value={Email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='mb-3'>
                            <TextField label="Password" variant="outlined"
                                placeholder='Enter Password' type='password' style={{ width: '50%' }}
                                value={Password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className='mb-3'>
                            <TextField label="Address" variant="outlined"
                                placeholder='Enter Address'
                                multiline rows={2}
                                type="text" style={{ width: '50%' }} value={Address}
                                onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                        <div>
                            <button className='btn btn-primary' onClick={Register}>Register</button>
                        </div>
                    </div>
                </div>
            </center>
            <ToastContainer />
        </div>

    )
}

export default StudentRegistation;