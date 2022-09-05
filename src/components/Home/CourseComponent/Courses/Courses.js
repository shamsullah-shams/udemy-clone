import React from "react";
import CourseComponent from "../CourseComponent";
import COURSES from "../../../../data/dummy-data";


const Courses = props => {
    return (
        <div className="CourseComponent">
            {
                COURSES.map(course => {
                    return (
                        <CourseComponent
                            redirect="/"
                            imageUrl={course.imageUrl}
                            title={course.title}
                            content={course.teacher}
                        />
                    )
                })
            }

        </div>
    )
};


export default Courses;