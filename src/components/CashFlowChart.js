import Chart from "react-apexcharts";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CashFlowChart.css";

const CashflowForecast = () => {
  const currentMonth = new Date().getMonth();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const defaultColors = Array(12).fill("#bdbdbd");
  defaultColors[currentMonth] = "#845ef7";

  const cashflowSeries = [4000, 7000, 8000, 10000, 11000, 15750, 9000, 12000, 14000, 16000, 18000, 20000];

  const avgValue = cashflowSeries.reduce((a, b) => a + b, 0) / cashflowSeries.length;

  const cashflowData = {
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          distributed: true,
          borderRadius: 4,
          borderRadiusApplication: "end",
        },
      },
      colors: defaultColors,
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: months,
        labels: {
          style: {
            colors: "#8e8da4",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            return "$" + value;
          },
          style: {
            colors: "#8e8da4",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: (value) => {
            return "$" + value;
          },
        },
      },
      annotations: {
        yaxis: [
          {
            y: avgValue,
            borderColor: "#000",
            label: {
              style: {
                color: "#fff",
                background: "#000",
                fontSize: "12px",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2,
                },
              },
              text: `Avg ${((avgValue / cashflowSeries.reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%`,
            },
          },
        ],
        points: [
          {
            x: months[currentMonth],
            y: cashflowSeries[currentMonth],
            seriesIndex: 0,
            label: {
              borderColor: "#845ef7",
              offsetY: -15,
              style: {
                color: "#fff",
                background: "#845ef7",
              },
              text: `$${cashflowSeries[currentMonth].toLocaleString()}`,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Cashflow",
        data: cashflowSeries,
      },
    ],
  };

  return (
    <div className="cashflow-forecast">
      <div className="cashflow_header">
        <div className="cashflow_title">
          <i class="bi bi-journal-text icon-large"></i>
          <h3>Cashflow Forecast</h3>
        </div>
        <div className="cashflow_details">
          <h3>$20,245</h3>
          <p>
            <span>
              <i class="bi bi-arrow-up"></i>12%{" "}
            </span>
            vs last year
          </p>
        </div>
      </div>
      <Chart options={cashflowData.options} series={cashflowData.series} type="bar" height={300} />
    </div>
  );
};

export default CashflowForecast;
