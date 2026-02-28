import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router";
import SideNavbar from "../Components/SideNavbar";
import Topbar from "../Components/Topbar";

const DashLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen m-4 relative isolate">
      <SideNavbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="flex-1 pl-2">
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="bg-bg-gray p-4 rounded-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashLayout;
