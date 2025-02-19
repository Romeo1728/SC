import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, ChartData } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface ChartBarProps {
  data: { name: string | string[]; value: number; bg: string }[];
}

const ChartBar: React.FC<ChartBarProps> = ({ data }) => {
 
  const chartData: ChartData<'bar'> = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.bg),
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Распределение по причинам отсутствия",
        font: { size: 22, lineHeight: 3, family: "Manrope", weight: 'bold' },
        align: 'start',
      },
      datalabels: {
        anchor: "end" as const,
        align: "top" as const,
        color: "#333",
        font: {
          size: 10,
          weight: "normal" as const,
          family: "Manrope",
          lineHeight: 1.2,
        },
        formatter: (value: number) => value, 
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 10,
          weight: "normal" as const,
          family: "Manrope",
          lineHeight: 1.2
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        type: "linear",  
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false
        }
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ChartBar;






