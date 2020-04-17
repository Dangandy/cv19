import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function getHistory(country) {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await fetch(`http://localhost:5000/plot/${country}`, {
        mode: "no-cors",
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setHistory(data.result);
        })
        .catch((error) => {
          setError(error);
        });
      setLoading(false);
    }
    fetchData();
  }, []);
  return {
    history,
    loading,
    error,
  };
}

export default function BarChart() {
  // get data
  const { history, loading, error } = getHistory("Canada");
  console.log("getting history");
  console.log(history);
  const canvas = useRef(null);
  const height = 400;
  const width = 600;
  const scale = 20;

  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  // useEffect(() => {
  //   const x = d3
  //     .scaleUtc()
  //     .domain(d3.extent(data, (d) => d.date))
  //     .range([margin.left, width - margin.right]);

  //   const y = d3
  //     .scaleLinear()
  //     .domain([0, d3.max(data, (d) => d.value)])
  //     .nice()
  //     .range([height - margin.bottom, margin.top]);

  //   const xAxis = (g) =>
  //     g.attr("transform", `translate(0,${height - margin.bottom})`).call(
  //       d3
  //         .axisBottom(x)
  //         .ticks(width / 80)
  //         .tickSizeOuter(0)
  //     );

  //   const yAxis = (g) =>
  //     g
  //       .attr("transform", `translate(${margin.left},0)`)
  //       .call(d3.axisLeft(y))
  //       .call((g) => g.select(".domain").remove())
  //       .call((g) =>
  //         g
  //           .select(".tick:last-of-type text")
  //           .clone()
  //           .attr("x", 3)
  //           .attr("text-anchor", "start")
  //           .attr("font-weight", "bold")
  //           .text(data.y)
  //       );

  //   const svg = d3
  //     .select(this.refs.canvas)
  //     .append("svg")
  //     .attr("width", width)
  //     .attr("height", height)
  //     .style("-webkit-tap-highlight-color", "transparent")
  //     .style("overflow", "visible");
  //   svg.append("g").call(xAxis);
  //   svg.append("g").call(yAxis);
  // }, []);
  return <div ref={canvas} />;
}
