import React from "react";

type ActivityLevel = "high" | "mid" | "low" | "none";

type DayData = {
  day: string;
  value: number;
  activity: ActivityLevel;
};

const data: DayData[] = [
  { day: "S", value: 78, activity: "none" },
  { day: "M", value: 85, activity: "mid" },
  { day: "T", value: 74, activity: "low" },
  { day: "W", value: 95, activity: "high" },
  { day: "T", value: 95, activity: "none" },
  { day: "F", value: 75, activity: "none" },
  { day: "S", value: 85, activity: "none" },
];

const getBarColor = (activity: ActivityLevel) => {
  switch (activity) {
    case "high":
      return "bg-green3";
    case "mid":
      return "bg-green2";
    case "low":
      return "bg-green1";
    default:
      return "bg-transparent bg-[repeating-linear-gradient(-45deg,#cbd5e1_0px,#cbd5e1_3px,transparent_3px,transparent_8px)]";
  }
};

const ProjectAnalytics: React.FC = () => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-3xl p-6 col-span-2 flex flex-col">
      <h3 className="text-xl font-medium text-gray-800 mb-2">
        Project Analytics
      </h3>

      <div className="flex-1 flex items-end justify-between">
        {data.map((item, index) => {
          const normalizedHeight = (item.value / maxValue) * 100;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 flex-1"
            >
              <div className="relative w-16 h-32 flex items-end group">
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-200
                                bg-white text-xs px-2 py-1 rounded-md shadow border"
                >
                  {item.value}%
                </div>

                <div
                  style={{ height: `${normalizedHeight}%` }}
                  className={`
                    w-full rounded-full transition-all duration-500
                    ${getBarColor(item.activity)}
                  `}
                />
              </div>

              <span className="text-gray-400 text-sm">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectAnalytics;
