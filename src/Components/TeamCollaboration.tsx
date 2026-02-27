import React from "react";

type Status = "Completed" | "In Progress" | "Pending";

interface TeamMember {
  id: number;
  name: string;
  task: string;
  status: Status;
}

const members: TeamMember[] = [
  {
    id: 1,
    name: "Alexandra Deff",
    task: "Github Project Repository",
    status: "Completed",
  },
  {
    id: 2,
    name: "Edwin Adenike",
    task: "Integrate User Authentication System",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Isaac Oluwatemilorun",
    task: "Develop Search and Filter Functionality",
    status: "Pending",
  },
  {
    id: 4,
    name: "David Oshodi",
    task: "Responsive Layout for Homepage",
    status: "In Progress",
  },
];

const statusStyles: Record<Status, string> = {
  Completed: "bg-green-100 text-green-700 border border-green-200",
  "In Progress": "bg-yellow-100 text-yellow-700 border border-yellow-200",
  Pending: "bg-red-100 text-red-600 border border-red-200",
};

const TeamCollaboration: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-4 col-span-5 rounded-2xl">
      {/* w-full max-w-2xl bg-white rounded-2xl p-6 */}
      <div className="flex items-center justify-between w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Team Collaboration
        </h2>
        <button className="flex items-center gap-2 border border-green2 text-green2 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-50 transition">
          + Add Member
        </button>
      </div>
      <div className="space-y-5 w-full">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={`https://i.pravatar.cc/150?img=${member.id + 10}`}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-xs text-gray-500">
                  Working on{" "}
                  <span className="font-medium text-gray-700">
                    {member.task}
                  </span>
                </p>
              </div>
            </div>

            <span
              className={`text-[10px] px-2 py-1 rounded-full font-medium ${statusStyles[member.status]}`}
            >
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaboration;
