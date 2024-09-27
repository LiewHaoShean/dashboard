import Chart from "react-apexcharts";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./FundingSources.css";

const FundingSourcesChart = () => {
  const options = {
    chart: {
      type: "bar",
      stacked: true,
    },
    colors: ["#775DD0", "#00E396", "#FFB800"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Apple", "Lenovo", "Asus"],
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
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  const series = [
    {
      name: "Source 1",
      data: [40, 50, 70],
    },
    {
      name: "Source 2",
      data: [70, 80, 30],
    },
    {
      name: "Source 3",
      data: [30, 40, 80],
    },
  ];

  return (
    <div className="funding-sources">
      <div className="funding-header">
        <div className="funding-title">
          <i class="bi bi-journal-text icon-large"></i>
          <h3>Funding Sources</h3>
        </div>
        <div className="funding-details">
          {options.colors.map((color) => (
            <div className="source-div">
              <h3 style={{ color: color }}>Source 1</h3>
              <div className="sales-stats">
                <p>310</p>
                <h4>Sales</h4>
              </div>
            </div>
          ))}
          {/* <div className="source-div">
            <h3>Source 1</h3>
            <div className="sales-stats">
              <p>310</p>
              <h4>Sales</h4>
            </div>
          </div>
          <div className="source-div">
            <h3>Source 2</h3>
            <div className="sales-stats">
              <p>1,420</p>
              <h4>Sales</h4>
            </div>
          </div>
          <div className="source-div">
            <h3>Source 3</h3>
            <div className="sales-stats">
              <p>1,920</p>
              <h4>Sales</h4>
            </div>
          </div> */}
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default FundingSourcesChart;
