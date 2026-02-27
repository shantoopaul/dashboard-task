import { Plus } from "lucide-react";

type ProjectItem = {
  title: string;
  dueDate: string;
  icon: string;
};

const projects: ProjectItem[] = [
  {
    title: "Develop API Endpoints",
    dueDate: "Nov 26, 2024",
    icon: "developApiEndpoint.jpg",
  },
  {
    title: "Onboarding Flow",
    dueDate: "Nov 28, 2024",
    icon: "onboardingFlow.jpg",
  },
  {
    title: "Build Dashboard",
    dueDate: "Nov 30, 2024",
    icon: "buildDashboard.jpg",
  },
  {
    title: "Optimize Page Load",
    dueDate: "Dec 5, 2024",
    icon: "optimizePageLoad.jpg",
  },
  {
    title: "Cross-Browser Testing",
    dueDate: "Dec 6, 2024",
    icon: "crossBrowserTesting.webp",
  },
];

const Projects = () => {
  return (
    <div className="col-span-3 row-span-6 rounded-2xl bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-800">Project</h3>

        <button className="flex items-center gap-2 rounded-full border border-green2 px-4 py-1.5 text-sm font-medium text-green2 transition hover:bg-green-50">
          <Plus size={16} />
          New
        </button>
      </div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
              <img
                src={project.icon}
                alt={project.title}
                className="h-8 w-8 object-cover"
              />
            </div>

            <div>
              <p className="font-medium text-gray-800">{project.title}</p>
              <p className="text-xs text-gray-400">
                Due date: {project.dueDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
