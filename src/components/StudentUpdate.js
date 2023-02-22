import axios from 'axios';
import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
function StudentUpdate() {
    const location = useLocation();
    const id = location.state.studentId;
    const [StudentData, setStudentData] = useState({})
    const [age,setAge]=useState('');
    const [address,setAddress]=useState('');
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:2520/getSingleStudent/${id}`).then((res) => {
            const { data } = res;
            setStudentData(data);
            setAddress(data.address);
            setAge(data.age);
        }, (err) => console.log(err))
    }, []);
    const update = () => {
        axios.patch(`http://localhost:2520/updateStudent/${id}`,
       { 
        age:age,
        address:address
       }

        ).then((success)=>{
                alert('Recoard is Updated');
                navigate('/');
        },(err)=>console.log(err))
    }
    return (

        <div className='container'>
            <div className='d-flex justify-content-center w-100 mt-5'>
                <div className='card col-4 p-4 bg-light'>
                    <div className='card-body  '>
                        <div className='input-name'>
                            <div>
                                <label className='fs-5'>Name</label>
                            </div>
                            <div>
                                <input type="text" className="form-control col-6 bg-secondary" placeholder="Enter Name" 
                                value={StudentData.name}
                                 />
                            </div>
                        </div>

                        <div className='input-email'>
                            <div>
                                <label className='fs-5'>Email</label>
                            </div>
                            <div>
                                <input type="email" className="form-control col-6 bg-secondary" placeholder="Enter Email" 
                                value={StudentData.email} />
                            </div>
                        </div>
                        <div className='input-age'>
                            <div>
                                <label className='fs-5'>Age</label>
                            </div>
                            <div>
                                <input type="number" className="form-control col-6" placeholder="Enter Age" 
                                value={age} onChange={(e)=>setAge(e.target.value)}/>
                            </div>
                        </div>
                        <div className='input-address'>
                            <div>
                                <label className='fs-5'>Address</label>
                            </div>
                            <div>
                                <input type="text"  className="form-control col-6" placeholder="Enter Address" 
                                value={address} 
                                onChange={(e)=>setAddress(e.target.value)} />
                            </div>
                        </div>
                        <p></p>
                        <div>
                            <button className='btn btn-primary ' onClick={update}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudentUpdate