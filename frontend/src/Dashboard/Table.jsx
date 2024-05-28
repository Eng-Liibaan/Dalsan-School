
import moment from 'moment'
import axios from 'axios'
import { endpoint} from '../api/endpoint'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
export const Tables = ({ isopen, User, Student, Class }) => {
    let navigate = useNavigate();
    const Handle = async (id) => {
        let { data } = await axios.delete(`${endpoint + '/user'}/${id}`)
       
        if (data.status) {
            toast.success(data.message)
            localStorage.removeItem("access_token")
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        }
    }
    return (
        <div className='container '>
            {isopen && (
                <table className="table table-bordered text-center mt-5">
                    <thead>
                        <tr>
                            {User && (
                                <>
                                    <th>ID</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Role</th>
                                    <th>Action</th>

                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {User && (
                                <>
                                    <td>{User._id}</td>
                                    <td>{User.UserName}</td>
                                    <td>{User.Email}</td>
                                    <td>{User.Status}</td>
                                    <td>{User.isAdmin}</td>
                                    <td>{
                                        <div>
                                            <Link to={`/user/single/update/${User._id}/${User.Email}/${User.UserName}/${User.Profile}`} className="btn btn-primary mx-2">Edit</Link>
                                            <button onClick={() => Handle(User._id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    }</td>

                                </>
                            )}
                        </tr>
                    </tbody>
                </table>
            )}
            {isopen && (
                <table className="table table-bordered text-center mt-5">
                    <thead>
                        <tr>
                            {Student && (
                                <>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Balance</th>
                                    <th>Status</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Student && (
                                <>
                                    <td>{Student.Name}</td>
                                    <td>{Student._id}</td>
                                    <td>{Student.Phone}</td>
                                    <td>{Student.Gender}</td>
                                    <td>{Student.Address}</td>
                                    <td>{Student.Balance}</td>
                                    <td>{Student.Status}</td>


                                </>
                            )}
                        </tr>
                    </tbody>
                </table>
            )}
            {isopen && (
                <table className="table table-bordered text-center mt-5">
                    <thead>
                        <tr>
                            {Class && (
                                <>

                                    <th>ID</th>
                                    <th>ClassName</th>
                                    <th>ClassStatus</th>
                                    <th>ClassDate</th>



                                </>
                            )}

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Class && (
                                <>

                                    <td>{Class._id}</td>
                                    <td>{Class.ClassName}</td>
                                    <td>{Class.ClassStatus}</td>
                                    <td>{moment(Class.ClassDate).format("L")}</td>



                                </>
                            )}

                        </tr>
                    </tbody>
                </table>
            )}
            <Toaster />
        </div>
    )
}