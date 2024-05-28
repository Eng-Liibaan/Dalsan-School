import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { endpoint } from '../../api/endpoint'
import moment from 'moment'
export const GetReceipt = () => {
    const [ApiData, setApiData] = useState([])
    const [search, setsearch] = useState("")
    const SearchData = ApiData.filter(data => (

        data.StudentID.Name.toLowerCase().includes(search) ||
        data.StudentID.Name.includes(search) ||
        data.Date.toLowerCase().includes(search) ||
        data.Date.includes(search)

    ))
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint + '/receipt');
            setApiData(data)
        }
        load()
    }, [endpoint])


    return (
        <div>
            <input style={{ width: "300px", float: "right", borderRadius: "26px" }} type="text" placeholder='Search' className='form-control text-center' value={search} onChange={(e) => setsearch(e.target.value)} />
            <Link to={'/receipt/create'} className="btn btn-info">Create +</Link>
            <Link to={'/AdminDashboard'} className="btn btn-success  ms-5"  >Back</Link>

            <table className="table table-boredered text-center mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>StudentName</th>
                        <th>ReceiptAmount</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {SearchData && SearchData.map((data, index) => (
                        <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.StudentID.Name}</td>
                            <td>{data.ReceiptAmount}</td>
                            <td>{moment(data.Date).format("L")}</td>
                            <td>{data.status}</td>
                            <td>{
                                <div>
                                    <Link to={`/receipt/update/${data.StudentID.Name}/${data.StudentID._id}`} className="btn btn-primary mx-2">Edit
                                    </Link>
                                    <Link to={`/receipt/delete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
                                </div>
                            }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


