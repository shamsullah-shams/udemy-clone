import React from "react";
import { Link } from "react-router-dom";


const Category = props => {
    return (
        <Link className="Links" to="/">
            <div>
                <img src={props.imageUrl} />
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
};


export default Category;