import DashTopStuff from "../Components/DashTopStuff";
import MetricsCard from "../Components/MetricsCard";
import ProjectAnalysis from "../Components/ProjectAnalytics";
import ProjectProgress from "../Components/ProjectProgress";
import Projects from "../Components/Projects";
import ReminderCard from "../Components/ReminderCard";
import TeamCollaboration from "../Components/TeamCollaboration";
import TimeTracker from "../Components/TimeTracker";
import { useEffect, useState } from "react";
import { getDashboardData, type DashboardOverview } from "../api/dashboard";

const Dashboard = () => {
  const [overview, setOverview] = useState<DashboardOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        setOverview(data.overview);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <div className="p-10">Loading dashboard...</div>;
  }

  if (!overview) {
    return <div className="p-10">Failed to load dashboard.</div>;
  }
  return (
    <>
      <DashTopStuff />
      <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12 auto-rows-[20px] lg:auto-rows-[24px]">
        <MetricsCard
          title="Total Users"
          count={overview.totalUsers}
          change={overview.growth}
          variant="primary"
        />

        <MetricsCard
          title="Active Users"
          count={overview.activeUsers}
          change={overview.growth}
        />

        <MetricsCard
          title="Revenue"
          count={overview.revenue}
          statusText="This month revenue"
        />
        <ProjectAnalysis />
        <ReminderCard />
        {/* <Projects />
        <TeamCollaboration />
        <ProjectProgress completed={30} inProgress={11} pending={59} />
        <TimeTracker /> */}
      </div>
    </>
  );
};

export default Dashboard;
