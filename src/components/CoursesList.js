import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default class CoursesList extends React.Component {

    render() {
        return (
            <motion.div className = "courses-container"
                initial = {{opacity :0}}
                animate = {{opacity: 1}}
                transition = {{duration: 0.5}}
            >
                <ul className="courses">
                    {
                        this.props.courses.map((item, index) => {
                            return (
                                    <motion.li className="course"
                                        key = {index}
                                        whileHover = {{
                                            scale: 1.05,
                                        }}
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
                            )
                        })
                    }
                </ul>
            </motion.div>
        )
    }
}
