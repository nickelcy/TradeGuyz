import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieCharts = ({ propData }) => {
  const [pieData, setPieData] = useState([]);
  const [pieLabel, setPieLabel] = useState([]);

  useEffect(() => {
    if (Array.isArray(propData) && propData.length !== 0) {
      const value1 = propData.map((object) => object.category_count);
      const value2 = propData.map((object) => object.category_name);
      setPieData(value1);
      setPieLabel(value2)
    } else {
      setPieData([])
      setPieLabel([])
    }
    
  }, [propData]);
  
  console.log(pieData)
  console.log(pieLabel)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Votes by Technology",
      },
    },
  };
  const data = {
    labels: pieLabel,
    datasets: [
      {
        label: "Number of Products: ",
        data: pieData,
        backgroundColor: [
          "#36A2EB", // Blue
          "#FF6384", // Pink
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#00A36C", // Jade
          "#C9CBCF",  // Grey
          "crimson",
        ],        
        borderWidth: 1,
        hoverOffset: 10
      },
    ],
  };

  return <Pie data={data} options={options} />;
};

export default PieCharts;
