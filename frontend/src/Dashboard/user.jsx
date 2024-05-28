import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from '../api/endpoint'
export const SingleUpdate = () => {
    let navigate = useNavigate()
    let { id, admin, status, username } = useParams()
    const [User, setUser] = useState({
        UserName: username,
        Email: admin,
        Profile: status,
    })
   

    const HandleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData()
        formdata.append('UserName', User.UserName)
        formdata.append('Email', User.Email)
        formdata.append('Profile', User.Profile)
        let { data } = await axios.put(`${endpoint+'/user'}/${id}`, formdata)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/userdashboard')
            }, 3000);
        } else {
            toast.error(data)
        }
    }
    return (
        <div>
            <div className="container  d-flex justify-content-center mt-4 align-items-center  text-center" style={{ height: "500px" }}>
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "400px" }}>
                    <div className="card-title text-light mt-2"><h1>Update User</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={User.UserName} placeholder="Enter Your UserName" onChange={(e) => setUser({ UserName: e.target.value, Email: User.Email, Profile: User.Profile })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text " className="form-control"
                                        value={User.Email} onChange={(e) => setUser({ Email: e.target.value, UserName: User.UserName, Profile: User.Profile })}
                                    />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="file" className="form-control" 
                                        onChange={(e) => setUser({ Profile: e.target.files[0], Email: User.Email, UserName: User.UserName })}
                                        accept="Application/pdf"
                                    />
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