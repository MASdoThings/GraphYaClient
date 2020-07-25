import React from "react";
import PropTypes from "prop-types";

function Line (props) {
    const { drag, x1, y1, x2, y2 } = props;

    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.2" stroke="black"/>
    )
}

Line.propTypes = {
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number,
    drag: PropTypes.bool
};

export default Line;
