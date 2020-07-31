import React, {useRef,useEffect,useState} from 'react';
import './App.css';
import {
    drag,
    select,
    forceLink,
    forceSimulation,
    forceManyBody,
    mouse,
    forceX,
    forceY,
    forceCollide,
    forceRadial,
    forceCenter
} from "d3";
import useResizeObserver from "./hooks/useResizeObserver";

function App () {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);


    useEffect(() => {
        if (!dimensions) return;
        const svg = select(svgRef.current);
        svg.attr("viewBox", [
            -dimensions.width / 2,
            -dimensions.height / 2,
            dimensions.width,
            dimensions.height
        ]);
        const nodes = [
            [56.94,10.06],
            [42.04,33.23],
            [13.98,32.70],
            [37.87,32.62],
            [81.15,15.44],
            [88.47,43.54],
            [23.08,42.67],
            [80.71,42.63],
            [57.56,37.10],
            [39.64,42.51],
        ];

        const edges = [
            {
                source: nodes[0],
                target: nodes[1]
            },
            {
                source: nodes[3],
                target: nodes[4]
            },
            {
                source: nodes[2],
                target: nodes[0]
            },
            {
                source: nodes[5],
                target: nodes[3]
            }
        ];

        forceSimulation(nodes)
            .force('charge', forceManyBody())
            .force('center', forceCenter(50, 50))
            .force('link', forceLink())
            .force('collision', forceCollide().radius(function(d) {
                return d.radius
            }))
            .on('tick', () => {
            // links
                    svg
                        .selectAll(".link")
                        .data(edges)
                        .join("line")
                        .attr("class", "link")
                        .attr("stroke", "black")
                        .attr("fill", "none")
                        .attr("x1", link => link.source.x)
                        .attr("y1", link => link.source.y)
                        .attr("x2", link => link.target.x)
                        .attr("y2", link => link.target.y);

                    // nodes
                svg
                    .selectAll(".node")
                    .data(nodes)
                    .join("circle")
                    .attr("class", "node")
                    .attr("r", 10)
                    .attr("cx", node => node.x)
                    .attr("cy", node => node.y);

    }
    );

    }, [ dimensions]);

    return(
        <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
            <svg ref={svgRef}/>
        </div>
    )
}



export default App;
