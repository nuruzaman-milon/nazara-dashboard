"use client";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const PieChart: React.FC = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 480,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default PieChart;
