import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default class DashboardList extends Component {
    render() {
        return (
            <motion.div className = "dashboard-list"
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 1}}
            >
                 <table className="attendance-table">
                    <thead>
                        <tr className="attendance-tr-head">
                            <td className="attendance-th">Name</td>
                            <td className="attendance-th">Card UID</td>
                            <td className="attendance-th">Course</td>
                            <td className="attendance-th">Arrival time</td>
                        </tr>
                    </thead>
                    <tbody className = "dashboard-tbody">
                        {
                            this.props.histories.map((item, index) => {
                                return (
                                    <tr key={index} className = "attendance-tr">
                                        <td className="attendance-td">
                                            <Link to = {`/dashboard/students`} className = "student-name">{item.name} {item.last_name}</Link>
                                        </td>
                                        <td className="attendance-td student-uid">
                                            {item.card_uid}
                                        </td>
                                        <td className="attendance-td student-course">{item.course}</td>
                                        <td className="attendance-td student-arrival-time">{new Date(item.date).toLocaleTimeString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </motion.div>
        )
    }
}
