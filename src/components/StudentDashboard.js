import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function StudentDashboard() {
    const [studentData, setStudentData] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        // axios.get(`http://localhost:2520/getAllStudent`).then((res) => {
        //     const {data}=res;
        //     setStudentData(data)
        //     console.log(data)
        // }, (err) => console.log(err))
        StudentDetails();

    }, [])
    const StudentDetails = () => {
        axios.get(`http://localhost:2520/getAllStudent`).then((res) => {
            const { data } = res;
            setStudentData(data)
            console.log(studentData)
        }, (err) => console.log(err))
    }
    const Registation=()=>{
        navigate('/registaion')
    }
    const Edit=(id)=>{
        navigate('/update',{state:{studentId:id}})
    }
    const Delete = (id) => {
        axios.delete(`http://localhost:2520/deleteStudent/${id}`).then((success)=>{
            toast.success(' Recoard is Deleted!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            StudentDetails();  
        },(err)=>console.log(err))
    }
    return (
        <div className='container'>
            <h1 className='text-center text-secondary mt-2' >DashBoard</h1>
            <div className=' btn btn-primary m-3 ' onClick={Registation}>Register New Student</div>
            <Table>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((element, index) => {
                        return (
                            <tr className='mb-2' key={index}>
                                <th>{element.id}</th>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                                <td>{element.email}</td>
                                <td>{element.address}</td>
                                <td className='btn btn-primary bg-primary m-3' onClick={()=>Edit(element.id)}>Edit</td>
                                <td className='btn btn-danger bg-danger m-3' onClick={() => Delete(element.id)}>Delete</td>
                            </tr>

                        )
                    })}
                </tbody>

            </Table>
            <ToastContainer />
        </div>
    )
}

export default StudentDashboard