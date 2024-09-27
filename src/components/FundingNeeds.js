import Chart from "react-apexcharts";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./FundingNeeds.css";

const FundingNeedsChart = () => {
  const options = {
    chart: {
      type: "bar",
      stacked: true,
    },
    colors: ["#00cfe8", "#e3e3e3"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "12px",
      labels: {
        colors: ["#333"],
      },
      markers: {
        radius: 2,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val.toLocaleString();
        },
      },
    },
  };

  const series = [
    {
      name: "Net income",
      data: [3000, 5000, 4000, 7000, 4000],
    },
    {
      name: "Gross income",
      data: [5000, 6000, 6000, 10000, 6000],
    },
  ];

  return (
    <div className="funding-needs">
      <div className="funding_heading">
        <i class="bi bi-journal-text icon-large"></i>
        <h3>Funding Needs</h3>
      </div>
      <div className="funding_details">
        <p>+41%</p>
      </div>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default FundingNeedsChart;
