import React, { Component } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const apiURI = "http://localhost:8080"

export default class AddCourse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            reference: "",
            classroom: "",
            title: "Add a new course",
            error: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleClick(event) {
        event.preventDefault()
        
        if (!this.state.classroom || !this.state.name || !this.state.reference) {
            this.setState({
                error: "Please fill the forms correctly"
            })
        }
        else {
            axios.post(`${apiURI}/courses/add`, {
                name: this.state.name,
                reference: this.state.reference,
                classroom: this.state.classroom
            }, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.error) {
                   this.setState({
                       error: response.data.error
                   })
                }
                else {
                    this.props.history.push('/dashboard')
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <motion.div className = "addcourse"
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 0.5}}
            >
                <div className = "form-container addcourse-form">
                    <div className="addcourse-title-container">
                        <h2 className= {this.state.error !== "" ? "addcourse-title error" : "addcourse-title"}>
                            {this.state.error || this.state.title}
                        </h2>
                    </div>
                    <div className = "form-group">
                        <input 
                            type = "text" 
                            className = "form-input addcourse-input"
                            placeholder = "Title of the course"
                            name = "name"
                            value = {this.state.name}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className = "form-group">
                        <input 
                            type = "text" 
                            className = "form-input addcourse-input"
                            placeholder = "Reference (eg: E522MF)"
                            name = "reference"
                            value = {this.state.reference}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className = "form-group">
                        <input 
                            type = "text" 
                            className = "form-input addcourse-input"
                            placeholder = "Classroom"
                            name = "classroom"
                            value = {this.state.classroom}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn course-btn" onClick = {this.handleClick}>Add</button>
                    </div>
                </div>
            </motion.div>
        )
    }
}
