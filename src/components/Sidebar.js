import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Axios from 'axios'
import DashboardIcon from '../icons/ic_dashboard_white_48dp.png'
import CoursesIcon from '../icons/ic_code_white_48dp.png'
import StudentsIcon from '../icons/ic_supervisor_account_white_48dp.png'
import AttendancesIcon from '../icons/ic_view_list_white_48dp.png'

const apiURI = "http://localhost:8080"

export default function Sidebar({history}) {

    Axios.get(`${apiURI}/check`, {withCredentials: true})
    .then(response => {
        if (response.data === false) {
            history.push('/')
        }
    })
    .catch(error => {
        history.push('/')
        throw error
    })

    const linkVariants = {
        "hover": {
            scale: 1.25,
            originX: 0,
            transition: {
                type: "spring",
                stiffness: 120
            }
        }
    }

    const buttonVariants = {
        "hover": {
            scale: 1.25,
            textShadow: "0px 0px 5px #ffffff",
            boxShadow: "0px 0px 5px #3b7be9",
            transition: {
                type: "spring",
                stiffness: 120
            }
        }
    }
    const links = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: DashboardIcon
        },
        {
            title: "Courses",
            url: "/dashboard/courses",
            icon: CoursesIcon
        },
        {
            title: "Students",
            url: "/dashboard/students",
            icon: StudentsIcon
        },
        {
            title: "Attendances",
            url: "/dashboard/attendances",
            icon: AttendancesIcon
        }
    ]

    function handleLogout(event) {
        event.preventDefault()

        Axios.get(`${apiURI}/logout`, {withCredentials: true})
        .then(response => {
            console.log(response.data)
            history.push('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    function renderLinks() {

        return links.map((item, index) => {
            return (
            <motion.li
                className = "nav-link"
                variants = {linkVariants}
                whileHover = "hover"
                key = {index}
            >
                <img src={item.icon} alt="icon" className="icon"/>
                <Link className="link" to = {item.url}>{item.title}</Link>
            </motion.li>
            )
        })
    }

    return (
        <motion.nav className = "sidebar"
            initial = {{x: "-10vw"}}
            animate = {{x: 0}}
            transition = {{duration: 0.5}}
        >
            <div className="profile-container">
                How'dy <span className="username">kevin8283</span> 
            </div>
            <ul className="nav-links">
               {renderLinks()}
            </ul>
            <div className="logout-container">
                <Link to = "/">
                    <motion.button className = "btn logout-btn"
                        variants = {buttonVariants}
                        whileHover = "hover"
                        onClick = {handleLogout}
                    >
                        Logout
                    </motion.button>
                </Link>
            </div>
        </motion.nav>
    )
}
