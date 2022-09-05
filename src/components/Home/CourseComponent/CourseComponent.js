import React from "react";
import { Link } from "react-router-dom";
import "./CourseComponent.css";



const CourseComponent = props => {
    return (
        <div className="CourseComponentContainer">
            <Link to={props.redirect} className="Links">
                <div className="ImageContainer">
                    <img className="ImageOnly" src={props.imageUrl} />
                </div>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </Link>
        </div>
    );
};


export default CourseComponent;