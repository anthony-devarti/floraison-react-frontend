import { useEffect } from "react"
import { useNavigate } from "react-router"
import { motion } from "framer-motion"
import { LogoBounce } from "./LogoBounce"

export default function LoginHandler() {

    //sends user to home page when loading is done.
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 3000)
    })

    return (
        <div className="loading">
            <LogoBounce />
        </div>
    )
}