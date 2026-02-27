import DashTopStuff from "../Components/DashTopStuff";
import MetricsCard from "../Components/MetricsCard";
import ProjectAnalysis from "../Components/ProjectAnalytics";
import ProjectProgress from "../Components/ProjectProgress";
import Projects from "../Components/Projects";
import ReminderCard from "../Components/ReminderCard";
import TeamCollaboration from "../Components/TeamCollaboration";
import TimeTracker from "../Components/TimeTracker";

const Dashboard = () => {
  return (
    <>
      <DashTopStuff />
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[48px]">
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
        <ReminderCard />
        <Projects />
        <TeamCollaboration />
        <ProjectProgress completed={30} inProgress={11} pending={59} />
        <TimeTracker />
      </div>
    </>
  );
};

export default Dashboard;
