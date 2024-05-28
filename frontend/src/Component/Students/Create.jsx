import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { endpoint } from "../../api/endpoint";
import { useNavigate } from "react-router-dom";
export const StudentCreate = () => {
    let navigate = useNavigate();
    const [Class, setClass] = useState([])


    const [Student, setStudent] = useState({
        Name: "",
        UserID: "",
        Phone: "",
        Gender: "",
        Address: "",
        ClassID: "",
    })

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(Student)
        let { data } = await axios.post(endpoint+'/student', Student)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/student')

            }, 3000);
        } else {
            toast.error(data)
        }




    }


    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint+'/class')
            setClass(data)
        }
        load()
    }, [endpoint])

    return (
        <div>
            <div className="container  d-flex justify-content-center  align-items-center  text-center" style={{ height: "10px", marginTop: "350px" }}>
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "510px" }}>
                    <div className="card-title text-light mt-2"><h1>Create Student</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={Student.ClassID} onChange={(e) => setStudent({ ClassID: e.target.value, Name: Student.Name, UserID: Student.UserID, Phone: Student.Phone, Gender: Student.Gender, Address: Student.Address })}>
                                        <option value="">Chooose ClassName</option>
                                        {Class && Class.map((data, index) => (
                                            <option key={index} value={data._id}>{data.ClassName}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={(Student.UserID)} onChange={(e) => setStudent({ UserID: e.target.value, Name: Student.Name, Phone: Student.Phone, Gender: Student.Gender, Address: Student.Address, ClassID: Student.ClassID })}>
                                        <option value="">Choose UserName</option>
                                        {Class && Class.map((data, index) => (
                                            <option key={index} value={data.UserID._id}>{data.UserID.UserName}</option>
                                        ))}
                                    </select>

                                </div>




                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={Student.Name} placeholder="Enter Your Name" onChange={(e) => setStudent({ Name: e.target.value, ClassID: Student.ClassID, UserID: Student.UserID, Phone: Student.Phone, Gender: Student.Gender, Address: Student.Address })} />
                                </div>

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control" value={Student.Phone} placeholder="Enter Your Phone" onChange={(e) => setStudent({ Phone: e.target.value, ClassID: Student.ClassID, Gender: Student.Gender, UserID: Student.UserID, Name: Student.Name, Address: Student.Address })} />
                                </div>
                                <div className="col-6 mx-auto form-control" style={{ width: "280px" }}>
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