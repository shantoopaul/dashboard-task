import DashTopStuff from "../Components/DashTopStuff";
import MetricsCard from "../Components/MetricsCard";
import ProjectAnalysis from "../Components/ProjectAnalytics";
import Users from "../Components/Users";
import ReminderCard from "../Components/ReminderCard";
import Products from "../Components/Products";
import { useEffect, useState } from "react";
import {
  getDashboardData,
  type DashboardOverview,
  type DashboardUser,
} from "../api/dashboard";

interface DashboardProduct {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
}

const Dashboard = () => {
  const [overview, setOverview] = useState<DashboardOverview | null>(null);
  const [users, setUsers] = useState<DashboardUser[]>([]);
  const [products, setProducts] = useState<DashboardProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        setOverview(data.overview);
        setUsers(data.users);
        setProducts(data.products ?? []);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return <div className="p-10">Loading dashboard...</div>;
  if (!overview) return <div className="p-10">Failed to load dashboard.</div>;

  return (
    <>
      <DashTopStuff />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12 auto-rows-[20px]">
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
        <Users users={users} />
        <Products products={products} />
        {/* <ProjectProgress completed={30} inProgress={11} pending={59} />
        <TimeTracker /> */}
      </div>
    </>
  );
};

export default Dashboard;
