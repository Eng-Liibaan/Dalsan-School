import { useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { endpoint } from '../../api/endpoint'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"
export const ReceiptDelete = () => {
    let navigate = useNavigate()
    let { id } = useParams()
    useEffect(() => {
        async function load() {
            let { data } = await axios.delete(`${endpoint+"/receipt"}/${id}`)
            if (data.status) {
                toast.success(data.message)
                setTimeout(() => {
                    navigate('/receipt')
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