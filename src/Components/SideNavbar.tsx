import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
// @ts-expect-error ts-ignore
import DashboardIcon from "../assets/dashboard.svg?react";
// @ts-expect-error ts-ignore
import TasksIcon from "../assets/tasks.svg?react";
// @ts-expect-error ts-ignore
import CalendarIcon from "../assets/calendar.svg?react";
// @ts-expect-error ts-ignore
import AnalyticsIcon from "../assets/analytics.svg?react";
// @ts-expect-error ts-ignore
import TeamIcon from "../assets/team.svg?react";
// @ts-expect-error ts-ignore
import SettingsIcon from "../assets/settings.svg?react";
// @ts-expect-error ts-ignore
import HelpIcon from "../assets/help.svg?react";
// @ts-expect-error ts-ignore
import LogoutIcon from "../assets/logout.svg?react";

const icons = {
  dashboard: DashboardIcon,
  tasks: TasksIcon,
  calendar: CalendarIcon,
  analytics: AnalyticsIcon,
  team: TeamIcon,
  settings: SettingsIcon,
  help: HelpIcon,
  logout: LogoutIcon,
};

type MenuItemType = {
  icon: keyof typeof icons;
  label: string;
  path: string;
  badge?: string;
  active?: boolean;
};

const mainMenuItems: MenuItemType[] = [
  { icon: "dashboard", label: "Dashboard", path: "/dashboard", active: true },
  { icon: "tasks", label: "Tasks", path: "/tasks", badge: "12+" },
  { icon: "calendar", label: "Calendar", path: "/calendar" },
  { icon: "analytics", label: "Analytics", path: "/analytics" },
  { icon: "team", label: "Team", path: "/team" },
];

const generalMenuItems: MenuItemType[] = [
  { icon: "settings", label: "Settings", path: "/settings" },
  { icon: "help", label: "Help", path: "/help" },
  { icon: "logout", label: "Logout", path: "/logout" },
];

const MenuItem = ({
  item,
  onLogout,
}: {
  item: MenuItemType;
  onLogout?: () => void;
}) => {
  const Icon = icons[item.icon];
  const isActive = item.active;

  const isLogout = item.label === "Logout";

  return (
    <li className="relative">
      {isActive && (
        <span className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-2 bg-green2 rounded-r-full" />
      )}

      {isLogout ? (
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-between py-2 text-gray-400 hover:bg-gray-200"
        >
          <span className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-gray-400" />
            <span className="text-xl">{item.label}</span>
          </span>
        </button>
      ) : (
        <Link
          to={item.path}
          className={`w-full flex items-center justify-between py-2 
          ${isActive ? "font-semibold" : "text-gray-400 hover:bg-gray-200"}`}
        >
          <span className="flex items-center gap-3">
            <Icon
              className={`w-6 h-6 ${
                isActive ? "text-green3" : "text-gray-400"
              }`}
            />
            <span className="text-xl">{item.label}</span>
          </span>

          {item.badge && (
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-green3 text-white">
              {item.badge}
            </span>
          )}
        </Link>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-green2 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      <aside
        className={`fixed lg:static rounded-2xl inset-y-0 left-0 z-40 w-64 bg-bg-gray p-6 flex flex-col justify-between gap-12 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
        aria-label="Sidebar Navigation"
      >
        <Link to="/dashboard" className="flex items-center gap-3">
          <img
            src="brandLogo.png"
            alt="Donezo Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold">Donezo</span>
        </Link>

        <nav aria-label="Main Menu">
          <p className="text-xs text-gray-400 uppercase mb-4">Menu</p>

          <ul className="space-y-2">
            {mainMenuItems.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <nav aria-label="General">
          <p className="text-xs text-gray-400 uppercase">General</p>
          <ul className="mt-2 space-y-2">
            {generalMenuItems.map((item) => (
              <MenuItem
                key={item.label}
                item={item}
                onLogout={item.label === "Logout" ? handleLogout : undefined}
              />
            ))}
          </ul>
        </nav>

        <div
          className="bg-[url('/mobileAdBg.png')] bg-cover bg-center rounded-2xl p-6 text-white"
          role="complementary"
          aria-label="Mobile App Promotion"
        >
          <p className="text-sm mb-4">Download our Mobile App</p>
          <button className="bg-green2 w-full py-2 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Download
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
