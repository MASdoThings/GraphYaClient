import React from "react";
import PropTypes from "prop-types";

function Circle (props) {
    const { color, x, y, r, text } = props;

    return (
        <g transform={`translate(${x}, ${y})`} >
            <circle fill={color} r={r} />
            <foreignObject x="-2.3" y="-2.3" width={r+2} height={r+2}>
                <div className="txt-container" >
                    <span className="text">Hello World</span>
                </div>
            </foreignObject>
        </g>
    )
}

Circle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    r: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string
};

export default Circle;
