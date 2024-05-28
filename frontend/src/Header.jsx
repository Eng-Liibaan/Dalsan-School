import { Link, useNavigate } from 'react-router-dom'
import './index.css'
export const Header = () => {
    let token = localStorage.getItem("access_token")
    let navigate = useNavigate()
    const Handle = () => {
        localStorage.removeItem("access_token")
        setTimeout(() => {
            navigate("/login")
        },);
    }
    return (
        <div>
            <nav className="menu navbar navbar-expand-lg navbar-light fixed-top fs-4  bg-dark" style={{ background: "#000", width: "100%" }}>
                <Link to="/" className="text-white fs-3  mx-5 navbar-brand">TalloSide</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item active ">
                            <Link to={"/"} className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={"/about"}>About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to={"/service"}>Service</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to={"/contuct"}>Contuct</Link>
                        </li>
                    </ul>
                </div>
                {!token && (
                    <>

                        <div >
                            <Link to={'/login'} style={{ textDecoration: "none" }}>

                                <p className='text-white mx-2 ' >signin</p>

                            </Link>
                        </div>


                        <div>
                            <Link to={"/register"}>

                                <h4 className='btn btn-danger mx-2 '>sign up</h4>

                            </Link>
                        </div>

                    </>
                )}
                {token && (
                    <div>
                        <Link onClick={Handle}>

                            <h4 className='btn btn-danger mx-2 '>Logout</h4>

                        </Link>
                    </div>
                )}
            </nav>

        </div>
    )
}