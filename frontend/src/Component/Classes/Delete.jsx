import axios from "axios"
import { useEffect } from "react"
import { endpoint} from "../../api/endpoint"
import { useNavigate, useParams } from "react-router-dom"
import { Toaster, toast } from "react-hot-toast"
export const ClassDelete = () => {
    let { id } = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        async function load() {
            let remove = `${endpoint+'/class'}/${id}`
            let { data } = await axios.delete(remove)
            if (data.status) {
                toast.success(data.message)
                setTimeout(() => {
                    navigate('/class')
                }, 3000);
            } else {
                toast.error(data)
            }

        }
        load()
    }, [endpoint])
    return (
        <div style={{ marginTop: "140px" }}>
            <Toaster />
        </div>
    )
}