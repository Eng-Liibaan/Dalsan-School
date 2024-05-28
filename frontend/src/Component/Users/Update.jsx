import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../api/endpoint";
export const UserUpdate = () => {
    let navigate = useNavigate()
    let { id, admin, status, username } = useParams()
    const [User, setUser] = useState({
        UserName: username,
        isAdmin: admin,
        Status: status,
    })
    const HandleSubmit = async (e) => {
        e.preventDefault();
        let { data } = await axios.put(`${endpoint+'/user'}/${id}`, User)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/user')
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
                                    <input type="text" className="form-control" value={User.UserName} placeholder="Enter Your UserName" onChange={(e) => setUser({ UserName: e.target.value, isAdmin: User.isAdmin, Status: User.Status })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={User.isAdmin} onChange={(e) => setUser({ isAdmin: e.target.value, UserName: User.UserName, Status: User.Status })}>
                                        <option value="true">Admin</option>
                                        <option value="false">User</option>
                                    </select>
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select
                                        className="form-control" value={User.Status} onChange={(e) => setUser({ Status: e.target.value, isAdmin: User.isAdmin, UserName: User.UserName })}>
                                        <option value="Active">Active</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Blocked">Blocked</option>
                                    </select>
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