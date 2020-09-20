import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class Students extends Component {
    render() {
        return (
            <div className = "component-container">
                <motion.header className="component-header"
                    initial = {{y: "-10vh"}}
                    animate = {{y: 0}}
                    transition = {{duration: 0.5, type: "spring", stiffness: 120}}
                >
                    <h2 className="component-title">Students</h2>
                    <p className="component-subtitle">Find here all informations about your students</p>
                </motion.header>
            </div>
        )
    }
}
