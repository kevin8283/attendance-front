import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Sidebar() {

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
                <motion.li className="nav-link"
                    variants = {linkVariants}
                    whileHover = "hover" 
                ><Link className="link" to = "/dashboard">Dashboard</Link></motion.li>
                <motion.li className="nav-link"
                    variants = {linkVariants}
                    whileHover = "hover" 
                ><Link className="link" to = "/dashboard/courses">Courses</Link></motion.li>
                <motion.li className="nav-link"
                    variants = {linkVariants}
                    whileHover = "hover" 
                ><Link className="link" to = "/dashboard/students">Students</Link></motion.li>
                <motion.li className="nav-link"
                    variants = {linkVariants}
                    whileHover = "hover" 
                ><Link className="link" to = "/dashboard/attendances">Attendances</Link></motion.li>
            </ul>
            <div className="logout-container">
                <motion.button className = "btn logout-btn"
                    variants = {buttonVariants}
                    whileHover = "hover"
                >
                    Logout
                </motion.button>
            </div>
        </motion.nav>
    )
}
