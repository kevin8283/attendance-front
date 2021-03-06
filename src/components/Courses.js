import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Link , Switch, Route } from 'react-router-dom'
import CoursesList from './CoursesList'
import AddCourse from './AddCourse'
import axios from 'axios'

const apiURI = "http://localhost:8080"

export default class Courses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            isLoading: false,
            showConfirmation: false
        }

        this.deleteCourse = this.deleteCourse.bind(this)
    }

    componentDidMount() {
        axios.get(`${apiURI}/courses`, {withCredentials: true})
        .then(response => {
            if (!response.data.error) {
                this.setState({courses: response.data})
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteCourse(event) {
        event.preventDefault()
        const id = event.target.id
           
        axios.delete(`${apiURI}/courses/delete/${id}`, {withCredentials: true})
        .then(response => {
            this.setState({
                courses: this.state.courses.filter((item, index) => item._id !== id)
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
                    <h2 className="component-title">Courses</h2>
                    <p className="component-subtitle">Tip: Click on a course for further details</p>
                </motion.header>
                <main className="main-component">
                    <motion.nav className="secondary-navbar"
                        initial = {{y: "-10vh"}}
                        animate = {{y: 0}}
                        transition = {{duration: 0.5, type: "spring", stiffness: 120}}
                    >
                        <ul className="secondary-nav-links">
                            <li className="secondary-nav-link">
                                <Link to = "/dashboard/courses/" className = "secondary-link">List</Link>
                            </li>
                            <li className="secondary-nav-link">
                                <Link to = "/dashboard/courses/add" className = "secondary-link">Add</Link>
                            </li>
                        </ul>
                    </motion.nav>
                    <motion.section className="component"
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition = {{duration: 1}}
                    >
                        <Switch>
                            <Route path = "/dashboard/courses" exact render = {() => <CoursesList courses = {this.state.courses} deleteCourse = {this.deleteCourse}/>} />
                            <Route path = "/dashboard/courses/add" component = {AddCourse} />
                        </Switch>
                    </motion.section>
                </main>
            </div>
        )
    }
}
