import { NavLink } from "react-router-dom";
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
import MobileAppPromo from "./MobileAppPromo";
import { X } from "lucide-react";

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
};

const mainMenuItems: MenuItemType[] = [
  { icon: "dashboard", label: "Dashboard", path: "/dashboard" },
  { icon: "tasks", label: "Tasks", path: "/dashboard/tasks", badge: "12+" },
  { icon: "calendar", label: "Calendar", path: "/dashboard/calendar" },
  { icon: "analytics", label: "Analytics", path: "/dashboard/analytics" },
  { icon: "team", label: "Team", path: "/dashboard/team" },
];

const generalMenuItems: MenuItemType[] = [
  { icon: "settings", label: "Settings", path: "/dashboard/settings" },
  { icon: "help", label: "Help", path: "/dashboard/help" },
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
  const isLogout = item.label === "Logout";

  return (
    <li className="relative">
      {isLogout ? (
        <button
          onClick={onLogout}
          className="group w-full flex items-center justify-between py-2 text-gray-400 hover:text-green2 transition-colors"
        >
          <span className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-gray-400 group-hover:text-green2 transition-colors" />
            <span className="text-xl">{item.label}</span>
          </span>
        </button>
      ) : (
        <NavLink
          to={item.path}
          end
          className={({ isActive }) =>
            `group w-full flex items-center justify-between py-2 transition-colors ${
              isActive
                ? "font-semibold text-green3"
                : "text-gray-400 hover:text-green2"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-2 bg-green2 rounded-r-full" />
              )}

              <span className="flex items-center gap-3">
                <Icon
                  className={`w-6 h-6 transition-colors ${
                    isActive
                      ? "text-green3"
                      : "text-gray-400 group-hover:text-green2"
                  }`}
                />
                <span className="text-xl">{item.label}</span>
              </span>

              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-green3 text-white">
                  {item.badge}
                </span>
              )}
            </>
          )}
        </NavLink>
      )}
    </li>
  );
};

const SideNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <aside
        className={`fixed lg:static top-0 left-0 h-screen lg:h-auto z-50 w-64 bg-bg-gray p-6 flex flex-col gap-12 rounded-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 ml-4 my-4" : "-translate-x-full"} lg:translate-x-0 lg:ml-0 lg:my-0`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <X size={22} />
        </button>
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <img
            src="brandLogo.png"
            alt="Donezo Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold">Donezo</span>
        </NavLink>

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

        <div className="mt-6 lg:mt-auto">
          <MobileAppPromo />
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

export default SideNavbar;
