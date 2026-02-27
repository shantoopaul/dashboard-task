import { Outlet } from "react-router";
import SideNavbar from "../Components/SideNavbar";
import Topbar from "../Components/Topbar";

const DashLayout = () => {
  return (
    <div className="flex min-h-screen m-4">
      <SideNavbar />
      <main className="flex-1 pt-2 pl-2">
        <Topbar />
        <div className="bg-bg-gray p-4  rounded-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashLayout;
