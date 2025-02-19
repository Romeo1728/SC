import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDonutProps {
  totalValue: number;
  dataValues: number[];
  dataLabels: string[];
  loadPage?: string
}

const ChartDonut: React.FC<ChartDonutProps> = ({ totalValue, dataValues, dataLabels, loadPage }) => {
  const dataSum = dataValues.reduce((acc, next) => acc + next, 0);
  const remainder = totalValue - dataSum;
  const fullDataValues = [...dataValues, remainder];
  const fullDataLabels = [...dataLabels, "Присутствующие"];

  const data = {
    labels: fullDataLabels,
    datasets: [
      {
        data: fullDataValues,
        backgroundColor: loadPage === 'reports' ? ["#07165C", "#CDDAF3"] : ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CDDAF3"],
        cutout: loadPage === 'reports' ? "80%" : '75%',
        radius: loadPage === 'reports' ? "70%" : '85%'
      },
    ],
  };


  const percentagePlugin = {
    id: "percentagePlugin",
    afterDraw(chart: any) {
      const { ctx, chartArea } = chart;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      const percentage = ((dataSum / totalValue) * 100).toFixed(1) + "%";
      ctx.fillStyle = "#333";
      ctx.font = "700 40px Manrope";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(percentage, centerX, centerY);

      ctx.fillStyle = "#333";
      ctx.font = "400 18px Manrope";
      ctx.fillText(`${totalValue} человек`, centerX, centerY + 30);
    },
  };

  const options = {
    responsive: true,
    rotation: loadPage === 'reports' ? -145 : 0,
    circumference: loadPage === 'reports' ? 288 : 360,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 12 },
          color: "#333",
        },
      },
      datalabels: {
        display: false,
      },
      percentagePlugin, /***/
    },
    elements: {
      arc: {
        borderWidth: 0,
        borderColor: " borderColor: rgba(255, 255, 255, 0.6)",

      },
    },
  };

  return <Doughnut data={data} options={options} plugins={[percentagePlugin]} />;
};

export default ChartDonut;

