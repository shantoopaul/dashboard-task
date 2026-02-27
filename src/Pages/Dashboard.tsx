import DashTopStuff from "../Components/DashTopStuff";
import MetricsCard from "../Components/MetricsCard";
import ProjectAnalysis from "../Components/ProjectAnalytics";

const Dashboard = () => {
  return (
    <>
      <DashTopStuff />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricsCard
          title="Total Projects"
          count={24}
          change={5}
          variant="primary"
        />

        <MetricsCard title="Ended Projects" count={10} change={6} />

        <MetricsCard title="Running Projects" count={12} change={2} />

        <MetricsCard
          title="Pending Project"
          count={2}
          statusText="On Discuss"
        />
        <ProjectAnalysis />
      </div>
    </>
  );
};

export default Dashboard;
