import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DashboardList extends Component {
    render() {
        return (
            <div className = "dashboard-list">
                 <table className="attendance-table">
                    <thead>
                        <tr className="attendance-tr-head">
                            <td className="attendance-th">Name</td>
                            <td className="attendance-th">Card UID</td>
                            <td className="attendance-th">Course</td>
                            <td className="attendance-th">Arrival time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.histories.map((item, index) => {
                                return (
                                    <tr key={index} className = "attendance-tr">
                                        <td className="attendance-td">
                                            <Link to = {`/dashboard/students`}>{item.name} {item.last_name}</Link>
                                        </td>
                                        <td className="attendance-td">
                                            {item.card_uid}
                                        </td>
                                        <td className="attendance-td">{item.course}</td>
                                        <td className="attendance-td">{new Date(item.date).toLocaleTimeString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
