import React from "react";
import PropTypes from "prop-types";

function Line (props) {
    const { text, color, x1, y1, x2, y2 } = props;

    return (
        <g >
            <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.2" stroke={color} />
            <foreignObject x={11} y={16} width={20} height={20}>
                <div className="txt-container" >
                    <span className="text text-line" >Hello world</span>
                </div>
            </foreignObject>
        </g>
    )
}

Line.propTypes = {
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string
};

export default Line;
