import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { endpoint } from '../../api/endpoint'

import {useNavigate} from 'react-router-dom'
import axios from "axios";
export const ClassCreate = () => {
    let navigate=useNavigate()
    const [ApiData, setApiData] = useState([])
    const [Class, setClass] = useState({
        ClassName: "",
        UserID: "",
        ClassStatus: "",
    })

    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint+'/user')
            setApiData(data)
        }
        load()
    }, [endpoint])

    const HandleSubmit = async (e) => {
        e.preventDefault();

        let { data } = await axios.post(endpoint+'/class', Class)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
            navigate('/class')
            }, 3000);
        } else {
            toast.error(data)
        }



    }
    return (
        <div >

            <div className="container  d-flex justify-content-center align-items-center mt-5 text-center" style={{ height: "500px" }}>
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "430px" }}>
                    <div className="card-title text-light mt-2"><h1>Create Class</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={Class.UserID} onChange={(e) => setClass({ UserID: e.target.value, ClassName: Class.ClassName, ClassStatus: Class.ClassStatus })}>
                                        <option value="">Choose UserName</option>
                                        {ApiData.map((data, index) => (
                                            <option key={index} value={data._id}>{data.UserName}</option>
                                        ))}
                                    </select>

                                </div>

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={Class.ClassName} placeholder="Enter Your className" onChange={(e) => setClass({ ClassName: e.target.value, UserID: Class.UserID, ClassStatus: Class.ClassStatus })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={Class.ClassStatus} onChange={(e) => setClass({ ClassStatus: e.target.value, UserID: Class.UserID, ClassName: Class.ClassName })}>
                                        <option value="">Choose ClassStatus</option>
                                        <option value="Active">Active</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Blocked">Blocked</option>
                                    </select >
                                </div>


                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <button className="btn btn-primary">Submit</button>
                                </div>

                            </div>
                        </form>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    )
}