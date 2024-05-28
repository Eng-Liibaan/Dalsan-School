import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { endpoint } from "../api/endpoint";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const ReceiptCreate1 = () => {
    let navigate = useNavigate()

    let [ApiData, setApiData] = useState([])
    const [Receipt, setReceipt] = useState({
        ReceiptAmount: '',
        StudentID: '',
    })
    let Nus = parseFloat(Receipt.ReceiptAmount)

    let obj = {
        ReceiptAmount: Nus,
        StudentID: Receipt.StudentID
    }
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint + '/student');
            setApiData(data)
        }
        load()
    }, [endpoint])

    const HandleSubmit = async (e) => {
        e.preventDefault();
        let { data } = await axios.post(endpoint + '/receipt', obj)
        if (data.status) {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/UserDashboard')
            }, 3000);
        } else {
            toast.error(data)
        }


    }
    return (
        <div>
            <div className="container  d-flex justify-content-center mt-5 align-items-center  text-center" style={{ height: "500px" }}>
                <div className="card bg-dark mt-5" style={{ width: "490px", height: "330px" }}>
                    <div className="card-title text-light mt-2"><h1>Create Receipt</h1></div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <div className="row gap-4">
                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <select className="form-control" value={Receipt.StudentID} onChange={(e) => setReceipt({ StudentID: e.target.value, ReceiptAmount: Receipt.ReceiptAmount })}>
                                        <option value="">Choose UserName</option>
                                        {ApiData && ApiData.map((data, index) => (
                                            <option key={index} value={data._id}>{data.Name}</option>

                                        ))}
                                    </select>

                                </div>

                                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                                    <input type="Number" className="form-control" value={Receipt.ReceiptAmount} placeholder="Enter Your ReceiptAmount" onChange={(e) => setReceipt({ ReceiptAmount: e.target.value, StudentID: Receipt.StudentID })} />
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