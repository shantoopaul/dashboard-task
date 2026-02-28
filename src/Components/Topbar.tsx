import { Search, Bell, Mail, Command, Menu } from "lucide-react";
import { useAuth } from "../Hooks/useAuth";

const Topbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between w-full mb-2 rounded-2xl  bg-bg-gray px-4 py-5 ">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} />
      </button>
      <div className="relative w-full max-w-sm group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-800 group-focus-within:text-green2 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search task"
          className="block w-full pl-12 pr-12 py-4 bg-white border border-gray-100 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green2/10 focus:border-green2 transition-all"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-800 bg-gray-50 border border-gray-200 rounded-lg">
            <Command size={14} /> F
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-800 hover:bg-gray-50 transition-colors relative">
          <Mail size={20} />
        </button>
        <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-800 hover:bg-gray-50 transition-colors relative">
          <Bell size={20} />
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img
            src={`https://i.pravatar.cc/300?u=${user?.name?.split(" ")[0].toLowerCase()}`}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 leading-tight">
            {user?.name}
          </h4>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
      </div>
    </header>
  );
};
export default Topbar;
