"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
const BarChart = () => {
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
        type: "bar",
        data: {
          labels: ["Januari", "Febuari", "Maret"],
          datasets: [
            {
              label: "Pemasukan",
              data: [pemasukan01, pemasukan02, pemasukan03],
              backgroundColor: "rgb(0, 255, 51, 0.2)",
              borderColor: "rgb(0, 255, 51)",
              barThickness: 10,
              borderWidth: 1,
              borderRadius: 20,
            },
            {
              label: "Pengeluaran",
              data: [pengeluaran01, pengeluaran02, pengeluaran03],
              backgroundColor: "rgb(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              barThickness: 10,
              borderWidth: 1,
            },
            {
              label: "Selisih",
              data: [pemasukan01 - pengeluaran01, pemasukan02 - pengeluaran02, pemasukan03 - pengeluaran03],
              backgroundColor: "rgb(34, 0, 255, 0.2)",
              borderColor: "rgb(34, 0, 255)",
              barThickness: 10,
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              title: {
                text: "Laporan Keuangan Bulanan",
                display: true,
                color: "#000",
                font: {
                  size: 18,
                },
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div id="bar" style={{ position: "relative", width: "500px" }} className="w-1/2 me-16">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;