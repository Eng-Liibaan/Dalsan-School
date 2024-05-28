import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { endpoint} from "../../api/endpoint";
import { useNavigate } from "react-router-dom";
export const UserCreate = () => {
    let navigate=useNavigate()
    const [User, setUser] = useState({
        UserName: "",
        Email: "",
        Password: "",
        Profile: ""
    })

    const HandleSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("UserName", User.UserName)
        formdata.append("Email", User.Email)
        formdata.append("Password", User.Password)
        formdata.append("Profile", User.Profile)
        let { data } = await axios.post(endpoint+'/user', formdata)
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
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "430px" }}>
                    <div className="card-title text-light mt-2"><h1>Create User</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={User.UserName} placeholder="Enter Your UserName" onChange={(e) => setUser({ UserName: e.target.value, Email: User.Email, Password: User.Password, Profile: User.Profile })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={User.Email} placeholder="Enter Your Email" onChange={(e) => setUser({ Email: e.target.value, UserName: User.UserName, Password: User.Password, Profile: User.Profile })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={User.Password} placeholder="Enter Your Password" onChange={(e) => setUser({ Password: e.target.value, Email: User.Email, UserName: User.UserName, Profile: User.Profile })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="file" className="form-control" placeholder="Enter Your UserName" onChange={(e) => setUser({ Profile: e.target.files[0], Email: User.Email, Password: User.Password, UserName: User.UserName })} />
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