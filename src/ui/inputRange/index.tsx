import React from "react";
import './input.css';

export default function InputRange( { ...props  } ) {

    return (
        <div className="mb-6">
            <label className="form-label">{props.label}</label>
           
           <input type="range" step="1"  className="custom-range" name={props.name} onKeyPress={props.onKeyPress} />100%
        </div>
    )
}