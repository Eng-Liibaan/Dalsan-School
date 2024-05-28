import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { endpoint } from "../../api/endpoint";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export const ClassUpdate = () => {
    let { className, classStatus, id } = useParams()
    let navigate = useNavigate()
    const [Class, setClass] = useState({
        ClassName: className,
        ClassStatus: classStatus,
    })
    const HandleSubmit = async (e) => {
        e.preventDefault();
        let update = `${endpoint+'/class'}/${id}`
        let { data } = await axios.put(update, Class)

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
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "330px" }}>
                    <div className="card-title text-light mt-2"><h1>Update Class</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text"
                                        className="form-control" value={Class.ClassName} onChange={(e) => setClass({ ClassName: e.target.value, ClassStatus: Class.ClassStatus })} />
                                </div>
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={Class.ClassStatus} onChange={(e) => setClass({ ClassStatus: e.target.value, ClassName: Class.ClassName })}>
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