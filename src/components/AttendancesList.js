import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default class AttendancesList extends Component {
    render() {
        return (
            <motion.div className="attendances"
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 1}}
            >
                <table className="attendance-table">
                    <thead>
                        <tr className="attendance-tr-head">
                            <td className="attendance-th">Date</td>
                            <td className="attendance-th">Course</td>
                            <td className="attendance-th">Students attending</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.attendances.map((item, index) => {
                                return (
                                    <tr key={index} className = "attendance-tr">
                                        <td className="attendance-td">{new Date(item.date).toLocaleDateString()}</td>
                                        <td className="attendance-td">
                                            <Link to={`/attendances/${item._id}`}>{item.course.name}</Link>
                                        </td>
                                        <td className="attendance-td">{item.students.length}</td>
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
