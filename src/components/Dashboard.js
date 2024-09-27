import "./Dashboard.css";
import CashflowForecast from "./CashFlowChart";
import SummaryOverview from "./SummaryOverview";
import ExpenseBreakdown from "./ExpensesBreakdown";
import RevenueProjection from "./RevenueProjection";
import FundingNeedsChart from "./FundingNeeds";
import FundingSourcesChart from "./FundingSources";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-container1">
        <SummaryOverview />
      </div>
      <div className="chart-container2">
        <ExpenseBreakdown />
      </div>
      <div className="chart-container3">
        <RevenueProjection />
      </div>
      <div className="chart-container4">
        <FundingNeedsChart />
      </div>
      <div className="chart-container5">
        <CashflowForecast />
      </div>
      <div className="chart-container6">
        <FundingSourcesChart />
      </div>
    </div>
  );
};

export default Dashboard;
