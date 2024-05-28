
import { useState } from "react"
import { jwtDecode } from 'jwt-decode'
import { AllPrivate } from "./Private"
import { Tables } from "./Table"
export const UserDashboard = () => {
    let token = localStorage.getItem("access_token");
    let decode = jwtDecode(token)
    let { Student, Class, User } = decode
    const [isopen, setisopen] = useState(false)
    return (
        <div style={{ marginTop: "68px" }}>
            <div className="row">
                <div className="col-3">
                    <AllPrivate isopen={setisopen} data={User} Student={Student} />
                </div>
                <div className="col-8">
                    <Tables Student={Student} Class={Class} User={User} isopen={isopen} />
                </div>
            </div>


        </div>
    )
}