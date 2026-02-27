import { Plus } from "lucide-react";

const DashTopStuff = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 mt-2">
      <div>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-3">
          Dashboard
        </h2>
        <p className="text-gray-400 text-lg">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-linear-to-b from-green3 to-green2 text-white px-8 py-4 rounded-full border-2 border-green2 hover:opacity-90 transition-all font-medium">
          <Plus size={20} />
          <span>Add Project</span>
        </button>
        <button className="bg-white text-green3 px-8 py-4 rounded-full border-2 border-green2 hover:bg-green2 hover:text-white transition-all font-medium">
          Import Data
        </button>
      </div>
    </div>
  );
};

export default DashTopStuff;
