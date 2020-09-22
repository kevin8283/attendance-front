import React, { Component } from 'react'
import { motion } from 'framer-motion'
import DashboardList from './DashboardList'
import Axios from 'axios'

const apiURI = "http://localhost:8000"

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            history: []
        }
    }
    componentDidMount() {
        Axios.get(`${apiURI}/history`, {withCredentials: true})
        .then(response => {
            this.setState({
                history: response.data
            })
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
                    <h2 className="component-title">Dashboard</h2>
                    <p className="component-subtitle">View the current attendance lists, and the latest updates</p>
                </motion.header>
                <main className="dashboard-main">
                    <DashboardList histories = {this.state.history}/>
                </main>
            </div>
        )
    }
}
