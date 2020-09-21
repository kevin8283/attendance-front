import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Axios from 'axios'

const apiURI = "http://localhost:8000"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isLoading: false,
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

        Axios.post(`${apiURI}/login`, {
            email: this.state.email,
            password: this.state.password
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

    displayError() {
        if (this.state.error !== "") {
            return (
                <motion.div className="form-group error-container"
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: 1}}
                >
                    {this.state.error}        
                </motion.div>
            )
        }
    }

    render() {
        return (
            <div className = "login-container">
               <motion.div className="form-container"
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: 1}}
               >
                   <div className="login-title-container">
                        <div className="login-title">Login</div>
                   </div>
                   <div className="form-group">
                       <label htmlFor="email" className="form-label">Email</label>
                       <input 
                            type = "email" 
                            className = "form-input"
                            name = "email"
                            id = "email"
                            value = {this.state.email}
                            onChange = {this.handleChange}
                        />
                   </div>
                   <div className="form-group">
                       <label htmlFor="password" className="form-label">Password</label>
                       <input 
                            type = "password" 
                            className = "form-input"
                            name = "password"
                            id = "password"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                        />
                   </div>
                   {this.displayError()}
                   <div className="form-group submit-btn-container">
                       <button className="btn submit-btn" onClick = {this.handleClick}>Sign in</button>
                   </div>
               </motion.div>
            </div>
        )
    }
}
