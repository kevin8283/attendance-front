import React, { Component } from 'react'
import Axios from 'axios'

const apiURI = "http://localhost:8000"

export default class CreateAttendance extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            courses: [],
            course_id: "",
            error: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleError = this.handleError.bind(this)
        this.renderError = this.renderError.bind(this)
    }
    componentDidMount() {
        Axios.get(`${apiURI}/courses`, {withCredentials: true})
        .then(response => {
            if(!response.data.error) {
                this.setState({
                    courses: response.data
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleChange(event) {
        event.preventDefault()

        this.setState({
            course_id: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault()

        Axios.post(`${apiURI}/attendances/add`, {
            id: this.state.course_id || this.state.courses[0]._id 
        }, { withCredentials: true })
        .then(response => {
            if (response.data.error) {
                this.handleError(response.data.error)
            }
            else {
                this.props.history.push('/dashboard')
            }
        })
        .catch(error => {
            console.log(error)
        })

    }

    handleError(error) {
        this.setState({error})
    }

    renderError() {
        if (this.state.error) {
            return <div className="error">{this.state.error}</div>
        }
    }
    
    render() {
        return (
            <div className = "create-attendance">
                <div className="form-create-attendance">
                    {this.renderError()}
                    <div className="form-group create-attendance-group">
                        <label htmlFor="course" className="create-attendance-label">Select a course</label>
                        <select id = "course" 
                            className = "create-attendance-select" 
                            value = {this.state.course_id}
                            onChange = {this.handleChange}
                        >
                            {
                                this.state.courses.map((item, index) => {
                                    return (
                                        <option key = {index} value={`${item._id}`} className = "create-attendance-option">{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="create-attendance-btn" onClick = {this.handleClick}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}
