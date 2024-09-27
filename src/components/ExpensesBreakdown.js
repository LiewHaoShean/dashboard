import Chart from "react-apexcharts";
import "./ExpensesBreakdown.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ExpenseBreakdown = () => {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    colors: ["#845ef7", "#12B5CB", "#FEC260", "#FFB74D"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => `$102,000`,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const seriesData = [32.8, 12.5, 32.8, 32.8];

  return (
    <div className="expense-breakdown">
      <div className="expenses_title">
        <i class="bi bi-journal-text icon-large"></i>
        <h3>Expense Breakdown</h3>
      </div>
      <Chart options={chartOptions} series={seriesData} type="donut" height={300} />
      <div className="legend">
        <p>32.8% | 12.5% | 32.8% | 32.8%</p>
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
