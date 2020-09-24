import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import AttendancesList from './AttendancesList'
import CreateAttendance from './CreateAttendance'

const apiURI = "http://localhost:8080"

export default class Attendances extends Component {

    constructor(props) {
        super(props)

        this.state = {
            attendances: []
        }
    }

    componentDidMount() {
        axios.get(`${apiURI}/attendances`, {withCredentials: true})
        .then(response => {
          
            if (!response.data.error) {
                this.setState({
                    attendances: response.data
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    

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
                <main className="attendance-component">
                    <motion.nav className="secondary-navbar"
                        initial = {{y: "-10vh"}}
                        animate = {{y: 0}}
                        transition = {{duration: 0.5, type: "spring", stiffness: 120}}
                    >
                        <ul className="secondary-nav-links">
                            <li className="secondary-nav-link">
                                <Link to = "/dashboard/attendances/" className = "secondary-link">List</Link>
                            </li>
                            <li className="secondary-nav-link">
                                <Link to = "/dashboard/attendances/add" className = "secondary-link">Create a new attendance list</Link>
                            </li>
                        </ul>
                    </motion.nav>
                    <Switch>
                        <Route path = "/dashboard/attendances" exact render = {() => <AttendancesList attendances = {this.state.attendances}/>}/>
                        <Route path = "/dashboard/attendances/add" component = {CreateAttendance} />
                    </Switch>
                </main>
            </div>
        )
    }
}
