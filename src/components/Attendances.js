import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class Attendances extends Component {
    render() {
        return (
            <div className = "component-container">
                <motion.header className="component-header"
                    initial = {{y: "-10vh"}}
                    animate = {{y: 0}}
                    transition = {{duration: 0.5, type: "spring", stiffness: 120}}
                >
                    <h2 className="component-title">Attendances</h2>
                    <p className="component-subtitle">Check the lists of who attended which course</p>
                </motion.header>
            </div>
        )
    }
}
