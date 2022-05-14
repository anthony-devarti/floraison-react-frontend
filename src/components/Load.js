import { useEffect } from "react"
import { useNavigate } from "react-router"
import { motion } from "framer-motion"
import { LogoBounce } from "./LogoBounce"
import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React


export default function Load() {

    //sends user to home page when loading is done.
    const navigate = useNavigate()

    //this is bouncing users back to the home page whenever they navigate

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    if (window.location.pathname === "/") {
        setTimeout(() => {
            navigate('/home')
        }, 3000)
    }

    return (
        <div className="loading">
            <LogoBounce />
        </div>
    )
}