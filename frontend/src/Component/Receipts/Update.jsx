import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../api/endpoint";
export const ReceiptUpdate = () => {
    const { id, Name } = useParams();
    let navigate = useNavigate()
    const [Receipt, setReceipt] = useState({
        Increase: "",
        StudentID: Name,
    })

    let Numbers = parseFloat(Receipt.Increase)
    let obj = {
        Increase: Numbers,
        StudentID: Receipt.StudentID
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        let { data } = await axios.put(`${endpoint+'/receipt'}/${id}`, obj)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/receipt')
            }, 3000);
        } else {
            toast.error(data)
        }


        console.log(data)


    }
    return (
        <div>
            <div className="container  d-flex justify-content-center mt-5 align-items-center  text-center" style={{ height: "500px" }}>
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "330px" }}>
                    <div className="card-title text-light mt-2"><h1>Update Receipt</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="text" className="form-control"

                                        value={Receipt.StudentID} onChange={(e) => setReceipt({ StudentID: e.target.value, Increase: Receipt.Increase })}

                                    />

                                </div>

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="number" className="form-control" value={Receipt.Increase} placeholder="Enter Your Increase" onChange={(e) => setReceipt({ Increase: e.target.value, StudentID: Receipt.StudentID })} />
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