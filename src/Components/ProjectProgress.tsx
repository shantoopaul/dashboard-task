import React from "react";

type ProjectProgressProps = {
  completed: number;
  inProgress: number;
  pending: number;
};

const RADIUS = 95;
const STROKE = 52;
const CIRCUMFERENCE = Math.PI * RADIUS;

const ProjectProgress: React.FC<ProjectProgressProps> = ({
  completed,
  inProgress,
  pending,
}) => {
  const total = completed + inProgress + pending;

  const completedPercent = completed / total;
  const inProgressPercent = (completed + inProgress) / total;

  const completedLength = completedPercent * CIRCUMFERENCE;
  const inProgressLength = inProgressPercent * CIRCUMFERENCE;

  const totalProgress = Math.round(((completed + inProgress) / total) * 100);

  return (
    <div className="col-span-4 rounded-2xl bg-white p-6">
      <h3 className="text-xl font-medium text-gray-800">Project Progress</h3>

      <div className="relative flex items-center justify-center">
        <svg
          width="260"
          height="160"
          viewBox="0 0 260 160"
          className="overflow-visible"
        >
          <defs>
            <pattern
              id="diagonalStripes"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
              patternTransform="rotate(45)"
            >
              <rect width="4" height="8" fill="#9CA3AF" />
            </pattern>
          </defs>

          <path
            d={`M 30 130 A ${RADIUS} ${RADIUS} 0 0 1 230 130`}
            fill="none"
            stroke="url(#diagonalStripes)"
            strokeWidth={STROKE}
            strokeLinecap="round"
          />

          <path
            d={`M 30 130 A ${RADIUS} ${RADIUS} 0 0 1 230 130`}
            fill="none"
            stroke="#1B5E3C"
            strokeWidth={STROKE}
            strokeDasharray={`${inProgressLength} ${CIRCUMFERENCE}`}
            strokeLinecap="round"
            className="transition-all duration-700"
          />

          <path
            d={`M 30 130 A ${RADIUS} ${RADIUS} 0 0 1 230 130`}
            fill="none"
            stroke="#2F855A"
            strokeWidth={STROKE}
            strokeDasharray={`${completedLength} ${CIRCUMFERENCE}`}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>

        <div className="absolute top-[75%] flex -translate-y-1/2 flex-col items-center">
          <span className="text-6xl font-medium text-gray-900">
            {totalProgress}%
          </span>
          <span className="text-sm text-green2">Project Ended</span>
        </div>
      </div>

      <div className="mt-8 flex justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green2" />
          Completed
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green3" />
          In Progress
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gray-400" />
          Pending
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
