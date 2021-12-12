import React from "react";
import './input.css';

export default function Input( { ...props  } ) {

    return (
        <div className="mb-6">
            <label className="form-label">{props.label}</label>
            <input type="text" className="form-control" name={props.name} onChange={props.onChange} />
        </div>
    )
}