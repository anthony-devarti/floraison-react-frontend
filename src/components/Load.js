import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function LoginHandler(){

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
          }, 3000)
    })

    const logo = process.env.PUBLIC_URL + "/logo.svg"

    return (
        <div className="loading">
            <img src={logo} />
        </div>
    )
}