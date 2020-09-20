import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class Courses extends Component {
    render() {
        return (
            <div className = "component-container">
                <motion.header className="component-header"
                    initial = {{y: "-10vh"}}
                    animate = {{y: 0}}
                    transition = {{duration: 0.5, type: "spring", stiffness: 120}}
                >
                    <h2 className="component-title">Courses</h2>
                    <p className="component-subtitle">Browse your courses, add, update and delete if needed</p>
                </motion.header>
            </div>
        )
    }
}
