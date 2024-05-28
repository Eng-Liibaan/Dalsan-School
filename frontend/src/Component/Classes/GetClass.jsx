import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import moment from 'moment'
import { endpoint } from '../../api/endpoint'
export const GetClass = () => {
    const [ApiData, setApiData] = useState([])
    const [search, setsearch] = useState("")
    const [Single, setSingle] = useState([])

    const SearchData = ApiData && ApiData.filter(data => (
        data.ClassName.toLowerCase().includes(search) ||
        data.ClassName.includes(search) ||
        data.ClassDate.toLowerCase().includes(search) ||
        data.ClassDate.includes(search) ||
        data.ClassStatus.toLowerCase().includes(search) ||
        data.ClassStatus.includes(search) ||
        data.UserID.Email.toLowerCase().includes(search) ||
        data.UserID.Email.includes(search) ||
        data.UserID.UserName.toLowerCase().includes(search) ||
        data._id.toLowerCase().includes(search) ||
        data.UserID.UserName.includes(search)

    ))

    useEffect(() => {
        async function load() {
            let {data}=await axios.get(endpoint+'/class')
            setApiData(data)
            let { data: Data } = await axios.get(`${endpoint+'/class'}/${'65e5de82ac6d72c9d82c61b6'}`);
            setSingle(Data)
        }

        load()
    }, [endpoint])


    return (
        <div>

            <input style={{ width: "300px", float: "right", borderRadius: "26px" }} type="text" placeholder='Search' className='form-control text-center' value={search} onChange={(e) => setsearch(e.target.value)} />
            <Link to={'/class/create'} className="btn btn-info ">Create +</Link>
            <Link to={'/AdminDashboard'} className="btn btn-success  ms-5"  >Back</Link>
            <table className="table table-boredered text-center mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>ClassName</th>
                        <th>ClassStatus</th>
                        <th>ClassDate</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {SearchData && SearchData.map((data, index) => (
                        <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.UserID.Email}</td>
                            <td>{data.UserID.UserName}</td>
                            <td>{data.ClassName}</td>
                            <td>{data.ClassStatus}</td>
                            <td>{moment(data.ClassDate).format("L")}</td>
                            <td>{
                                <div>
                                    <Link to={`/class/update/${data._id}/${data.ClassName}/${data.ClassStatus}`} className="btn btn-primary mx-2">Edit
                                    </Link>
                                    <Link to={`/class/delete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
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


