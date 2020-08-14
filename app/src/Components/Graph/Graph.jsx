import React, {useRef, useEffect, useState, useCallback, useMemo} from 'react';
import {
    zoom,
    drag,
    select,
    forceLink,
    forceSimulation,
    forceManyBody,
    forceCollide,
    event,
    forceCenter
} from "d3";

const Graph = ({dimensions}) => {
    const svgRef = useRef();

    const nodes = [
        {id: "Cravat", group: 1},
        {id: "Count", group: 1},
        {id: "OldMan", group: 1},
        {id: "Lazare", group: 2},
        {id: "Valdemar", group: 2},
        {id: "Marguerite", group: 2},
        {id: "Mme.deR", group: 2},
    ];
    const edges = [
        {
            source: "OldMan",
            target: "Valdemar",
            value: 1
        },
        {
            source: "Count",
            target: "Valdemar",
            value: 2
        },
        {
            source: "Cravat",
            target: "Valdemar",
            value: 1
        },
        {
            source: "Lazare",
            target: "Marguerite",
            value: 1
        },
        {
            source: "Lazare",
            target: "Mme.deR",
            value: 1
        },
        {
            source: "Mme.deR",
            target: "OldMan",
            value: 1
        },
        {
            source: "OldMan",
            target: "Lazare",
            value: 1
        }
    ];


    const createGraph = useCallback((nodes,edges,dimensions) => {

        const svg = select(svgRef.current)
            .attr("viewBox", [
                -dimensions.width / 2,
                -dimensions.height / 2,
                dimensions.width,
                dimensions.height
            ]);

        const g = svg.append("g");

        svg.call(zoom()
            .extent([[0, 0], [dimensions.width, dimensions.height]])
            .scaleExtent([1, 8])
            .on("zoom", () => g.attr("transform", event.transform)));

        const sim = forceSimulation(nodes)
            .force('charge', forceManyBody())
            .force('center', forceCenter(50, 50))
            .force('link', forceLink().id(function(d) { return d.id; }))
            .force('collision', forceCollide().radius(function(d) {
                return d.radius || 70
            }));

        const link = g.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(edges)
            .enter().append("line");

        const node = g.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("r", 50)
            .on("click", () => console.log('test'))
            .call(drag()
                .on("start", dragStarted)
                .on("drag", dragged)
                .on("end", dragEnded));

        const text = g.append("g")
            .attr("class", "text")
            .selectAll("text")
            .data(nodes)
            .enter().append("text")
            .style("fill", "magenta")
            .style("font-size", "1.5em")
            .attr("dx", "-1.5em")
            .attr("dy", ".35em")
            .text(function(d) { return d.id; })
            .call(drag()
                .on("start", dragStarted)
                .on("drag", dragged)
                .on("end", dragEnded));

        node.append("title")
            .text(function(d) { return d.id; });


        sim
            .force("link")
            .links(edges)
            .distance(300);

        sim
            .nodes(nodes)
            .on("tick", ticked);



        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            text
                .attr("x", function(d) { return d.x; })
                .attr("y", function(d) { return d.y; });
        }

        function dragStarted(d) {
            if (!event.active) sim.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragEnded(d) {
            if (!event.active) sim.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

    },[]);

    useEffect(() => {
            createGraph(nodes,edges,dimensions);
    },[createGraph, dimensions, edges, nodes]);

    return(
        <svg ref={svgRef}/>
    )
};

export default Graph;
