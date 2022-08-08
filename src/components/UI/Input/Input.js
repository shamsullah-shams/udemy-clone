import React from "react";
import { TextField } from "@mui/material";
import "./Input.css";

const Input = props => {
    return (
        <div className="FormDiv">
            <TextField {...props} />
        </div>
    );
};

export default Input;