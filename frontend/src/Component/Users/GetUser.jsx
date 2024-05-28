import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { endpoint} from '../../api/endpoint'
export const GetUser = () => {
    const [ApiData, setApiData] = useState([])
    const [search, setsearch] = useState("")
    useEffect(() => {
        async function load() {

            let { data } = await axios.get(endpoint+'/user');
            setApiData(data)

        }
        load()
    }, [endpoint])


    const SearchData = ApiData.filter(data => (
        data.UserName.toLowerCase().includes(search) ||
        data.UserName.includes(search)
    ))

    return (
        <div>

            <input style={{ width: "300px", float: "right", borderRadius: "26px" }} type="text" placeholder='Search' className='form-control text-center' value={search} onChange={(e) => setsearch(e.target.value)} />
            <Link to={'/user/create'} className="btn btn-info">Create +</Link>
            <Link to={'/AdminDashboard'} className="btn btn-success  ms-5"  >Back</Link>

            <table className="table table-boredered text-center mt-5">
                <thead >
                    <tr >
                        <th >ID</th>
                        <th>Profile</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody >
                  {SearchData.map((data, index) => (
                 
                        <tr  key={index}  >
                            <td>{data._id}</td>
                            <td>{<img src={ `https://student-projects.onrender.com/images/`+data.Profile} alt='' width="140px" height="140px" style={{ borderRadius: "50%", marginTop: "-15px" }} />}</td>
                            <td>{data.UserName}</td>
                            <td>{data.Email}</td>
                            <td >{data.isAdmin}</td>
                            <td>{data.Status}</td>
                            <td>{
                                <div>
                                    <Link to={`/user/update/${data._id}/${data.isAdmin}/${data.UserName}/${data.Status}`} className="btn btn-primary mx-2">Edit
                                    </Link>
                                    <Link to={`/user/delete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
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


