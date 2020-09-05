import React, {useRef, useEffect, useCallback, useContext,useState} from 'react';
import { zoom,
        drag,
        select,
        forceLink,
        forceSimulation,
        forceManyBody,
        forceCollide,
        event,
        forceCenter
} from "d3";
import Context from "../Context";


const Graph = ({dimensions}) => {
    const context = useContext(Context);
    let svgRef = useRef();
    let gRef = useRef();
    let linksRef = useRef([]);

    const nodes = context.nodes;
    const edges = context.edges;

    console.log('check');

    const createGraph = (dimensions) => {

        const svg = select(svgRef.current);
        const g = select(gRef.current);

        svg.call(zoom()
            .extent([[0, 0], [dimensions.width, dimensions.height]])
            .scaleExtent([1, 8])
            .on("zoom", () => g.attr("transform", event.transform)));

        const sim = forceSimulation(context.nodes)
            .force('charge', forceManyBody())
            .force('center', forceCenter(50, 50))
            .force('link', forceLink().id(function(d) { return d.id; }))
            .force('collision', forceCollide().radius(function(d) {
                return d.r || 70
            }));


        sim
            .force("link")
            .links(edges)
            .distance(300);

        //context.setData({...context.data,edges:edges});
        const link = select(linksRef.current)
            .selectAll("line")
            .data(edges);

        // const link = g.append("g")
        //     .attr("class", "links")
        //     .selectAll("line")
        //     .data(edges)
        //     .enter().append("line");

        const node = g.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(context.nodes)
            .enter().append("circle")
            .attr("r", (d) => d.r ? d.r : 50)
            .style("fill",(d) => d.group === "2" ? "#cb68ff" : "#6ad6ea")
            //.on("mouseover", startHover)
            //.on("mouseout", stopHover)
            .call(drag()
                .on("start", dragStarted)
                .on("drag", dragged)
                .on("end", dragEnded));

        const text = g.append("g")
            .attr("class", "text")
            .selectAll("text")
            .data(context.nodes)
            .enter().append("text")
            .style("fill", "black")
            .style("font-size", "1.5em")
            .attr("dx", "-1.5em")
            .attr("dy", ".35em")
            //.on("mouseover", startHover)
            //.on("mouseout", stopHover)
            .text(function(d) { return d.name; })
            .call(drag()
                .on("start", dragStarted)
                .on("drag", dragged)
                .on("end", dragEnded));

        node.append("title")
            .text(function(d) { return d.name; });

        sim
            .nodes(context.nodes)
            .on("tick", ticked);


        function startHover(d) {
            const index = this.__data__.index;
            const curNode = svgRef.current.childNodes[0].childNodes[1].childNodes[index];
            const curText = svgRef.current.childNodes[0].childNodes[2].childNodes[index];

            select(curNode).transition()
                .attr("r", d.r ? d.r + 20 : 70);
            select(curText).transition()
                .style("fill","#d2088d");
        }
        function stopHover(d) {
            const index = this.__data__.index;
            const curNode = svgRef.current.childNodes[0].childNodes[1].childNodes[index];
            const curText = svgRef.current.childNodes[0].childNodes[2].childNodes[index];

            select(curNode).transition()
                .attr("r", d.r ? d.r - 10 : 50);

            select(curText).transition()
                .style("fill","black");
        }
        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x })
                .attr("y1", function(d) { return d.source.y })
                .attr("x2", function(d) { return d.target.x })
                .attr("y2", function(d) { return d.target.y });

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

    };


    useEffect(() => {
        createGraph(dimensions);
    },[]);
    console.log(context.data);
    return(
        <svg viewBox={`
        ${-dimensions.width / 2},
        ${-dimensions.height / 2},
        ${dimensions.width},
        ${dimensions.height}
        `} ref={svgRef}
        >
            <g className="display" ref={gRef}>
                <g className="links" ref={linksRef}>
                    {
                        context.data.edges.map(edge => {
                            return <line stroke="black"/>
                        })
                    }
                </g>
            </g>
        </svg>
    )
};

export default Graph;
