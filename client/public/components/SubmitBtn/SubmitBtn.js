import React from "react";
import "../../utils/css/style.css"

export function SubmitBtn({values, click} ) {
    return (
        <button className="submit-btn" onClick={() => {click(values)}}>
            Submit
        </button>
    )
}

export default SubmitBtn;