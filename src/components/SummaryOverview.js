import Chart from "react-apexcharts";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SummaryOverview.css";

const SummaryOverview = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 300,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Q1", "Q2", "Q3"],
    },
    yaxis: {
      title: {
        text: "%",
      },
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    colors: ["#845ef7", "#4CAF50", "#ff9800"],
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };

  const seriesData = [
    {
      name: "eg1",
      data: [100, 35, 100],
    },
    {
      name: "eg2",
      data: [73, 27, 68],
    },
    {
      name: "eg3",
      data: [48, 8, 78],
    },
  ];

  return (
    <div className="summary-overview">
      <div className="header">
        <div className="header_title">
          <i class="bi bi-journal-text icon-large"></i>
          <h3>Summary Overview</h3>
        </div>
        <div className="header_details">
          <p>
            <span>9,203</span> Contents
          </p>
        </div>
      </div>
      <Chart options={chartOptions} series={seriesData} type="bar" height={350} />
    </div>
  );
};

export default SummaryOverview;
