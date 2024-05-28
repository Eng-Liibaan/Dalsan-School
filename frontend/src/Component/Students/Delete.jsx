import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { endpoint } from "../../api/endpoint"
import toast, { Toaster } from "react-hot-toast"
export const StudentDelete = () => {
    let {id} = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        async function load() {
            let { data } = await axios.delete(`${endpoint+'/student'}/${id}`)
            if (data.status) {
                toast.success(data.message)
                setTimeout(() => {
                    navigate('/student')
                }, 3000);
            } else {
                toast.error(data)
            }

        }
        load()
    })
    console.log(id)

    return (
        <div style={{ marginTop: "140px" }}>
            <Toaster />
        </div>
    )
}