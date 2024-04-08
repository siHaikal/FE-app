"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
const PieChart = () => {
  const chartRef = useRef(null);

  const pemasukan01 = 2514000;
  const pengeluaran01 = 2047000;
  const pemasukan02 = 4309000;
  const pengeluaran02 = 4357000;
  const pemasukan03 = 4208000;
  const pengeluaran03 = 2181000;

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "pie",
        data: {
          labels: ["Pemasukan", "Pengeluaran", "Selisih"],
          datasets: [
            {
              label: "Total",
              data: [pemasukan01 + pemasukan02 + pemasukan03, pengeluaran01 + pengeluaran02 + pengeluaran03, pemasukan01 - pengeluaran01 + (pemasukan02 - pengeluaran02) + (pemasukan03 - pengeluaran03)],
              backgroundColor: ["rgb(0, 255, 51)", "rgb(255, 99, 132)", "rgb(34, 0, 255)"],
              borderWidth: 1,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Januari - Maret",
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div id="bar" style={{ position: "relative", width: "300px" }} className="w-1/2">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;