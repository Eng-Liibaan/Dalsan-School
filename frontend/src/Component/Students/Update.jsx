import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { endpoint} from "../../api/endpoint"

export const StudentUpdate = () => {
    let navigate = useNavigate()
    const { id, A, G, P, N } = useParams()
    const [Student, setStudent] = useState({
        Name: N,
        Phone: P,
        Gender: G,
        Address: A,
    })

    const HandleSubmit = async (e) => {
        e.preventDefault();
        let { data } = await axios.put(`${endpoint+'/student'}/${id}`, Student)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/student')
            }, 3000);
        } else {
            toast.error(data)
        }



    }
    return (
        <div>
            <div className="container  d-flex justify-content-center  align-items-center  text-center" style={{ height: "10px", marginTop: "350px" }}>
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "510px" }}>
                    <div className="card-title text-light mt-2"><h1>Update Student</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={Student.Name} placeholder="Enter Your Name" onChange={(e) => setStudent({ Name: e.target.value, ClassID: Student.ClassID, UserID: Student.UserID, Phone: Student.Phone, Gender: Student.Gender, Address: Student.Address })} />
                                </div>

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={Student.Phone} placeholder="Enter Your Phone" onChange={(e) => setStudent({ Phone: e.target.value, ClassID: Student.ClassID, Gender: Student.Gender, UserID: Student.UserID, Name: Student.Name, Address: Student.Address })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={Student.Gender} onChange={(e) => setStudent({ Gender: e.target.value, Phone: Student.Phone, UserID: Student.UserID, ClassID: Student.ClassID, Name: Student.Name, Address: Student.Address })}>
                                        <option value="">Choose Gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </select >
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" placeholder="Enter Your Address" value={Student.Address} onChange={(e) => setStudent({ Address: e.target.value, ClassID: Student.ClassID, UserID: Student.UserID, Phone: Student.Phone, Gender: Student.Gender, Name: Student.Name })} />
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