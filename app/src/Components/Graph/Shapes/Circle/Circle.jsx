import React from "react";
import PropTypes from "prop-types";

function Circle (props) {
    const { drag, x, y, r } = props;

    return (
        <circle  cx={x} cy={y} r={r} fill="black"/>
    )
}

Circle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    r: PropTypes.number,
    drag: PropTypes.bool
};

export default Circle;
