import { Link } from 'react-router-dom'
export const AdminDashboard = () => {
    return (
        <div style={{ marginTop: "68px" }}>
            <div className="row">
                <div className="col-6 bg-danger  " style={{ height: "600px", width: "300px" }}>
                    <div className="mt-4  m-4  ">
                        <div className="col-3">
                            <Link to={'/student'} className="btn btn-light m-3" style={{ width: "170px" }}>Student</Link>
                        </div>
                        <div className="col-3">
                            <Link to={'/class'} className="btn btn-light m-3 " style={{ width: "170px" }}>Class</Link>
                        </div>
                        <div className="col-3">
                            <Link to={'/user'} className="btn btn-light m-3 " style={{ width: "170px" }}>User</Link>
                        </div>
                        <div className="col-3">
                            <Link to={'/receipt'} className="btn btn-light m-3 " style={{ width: "170px" }}>Receipt</Link>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light m-3 " style={{ width: "170px" }}>Setting</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 text-center" style={{ marginTop: "-10px" }}>

                </div>
            </div>
        </div>
    )
}