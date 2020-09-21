import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default class CoursesList extends React.Component {

    render() {
        return (
            <div className = "courses-container">
                <ul className="courses">
                    {
                        this.props.courses.map((item, index) => {
                            return (
                                <AnimatePresence key = {index}>
                                    <motion.li className="course"
                                        exit = {{y: 1000}}
                                        transition = {{duration: 1}}
                                    >
                                        <Link to={`/courses/${item._id}`} className="course-link">
                                            <div className="course-name">{item.name}</div>
                                        </Link>
                                        <div className="course-edit">
                                            <Link className="course-edit-link" to={`/courses/edit/${item._id}`}>Edit</Link>
                                        </div>
                                        <div className="course-delete">
                                            <p className="course-delete-link" onClick={this.props.deleteCourse} id={item._id}>Delete</p>
                                        </div>
                                    </motion.li>
                                </AnimatePresence>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
