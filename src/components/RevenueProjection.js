import Chart from "react-apexcharts";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./RevenueProjection.css";

function RevenueProjection() {
  const revenueProjectionData = {
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
    },
    series: [
      {
        name: "Profit Margin",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Sales",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  };
  return (
    <div className="revenue-projection">
      <div className="revenue_title">
        <i class="bi bi-journal-text icon-large"></i>
        <h3>Revenue Projection</h3>
      </div>
      <div className="revenue_details">
        <div className="sales">
          <h4>Sales</h4>
          <p>+43%</p>
        </div>
        <div className="profit-margin">
          <h4>Profit Margin</h4>
          <p>+21%</p>
        </div>
      </div>
      <Chart options={revenueProjectionData.options} series={revenueProjectionData.series} type="area" height={300} />
    </div>
  );
}

export default RevenueProjection;
