import { ArrowUpRight } from "lucide-react";

interface MetricsCardProps {
  title: string;
  count: number;
  change?: number;
  statusText?: string;
  variant?: "default" | "primary";
}

const MetricsCard = ({
  title,
  count,
  change,
  statusText,
  variant = "default",
}: MetricsCardProps) => {
  const isPrimary = variant === "primary";
  const isPositive = typeof change === "number" && change > 0;
  const isNegative = typeof change === "number" && change < 0;

  return (
    <section
      className={`
        col-span-3 rounded-2xl p-4 transition-all duration-300
        ${
          isPrimary
            ? "bg-linear-to-b from-green3 to-green2 text-white"
            : "bg-white"
        }
      `}
    >
      <div className="flex items-start justify-between">
        <span
          className={`text-xl font-medium ${isPrimary ? "text-white/90" : "text-gray-800"}`}
        >
          {title}
        </span>

        <div
          className={`
            w-9 h-9 flex items-center justify-center rounded-full border
            ${
              isPrimary
                ? "bg-white text-black border-white"
                : "border-gray-400 text-gray-700"
            }
          `}
        >
          <ArrowUpRight size={20} />
        </div>
      </div>

      <h3
        className={`mt-2 text-6xl font-medium ${isPrimary ? "text-white" : "text-black"}`}
      >
        {count}
      </h3>

      <div className="mt-4 flex items-center gap-2">
        {typeof change === "number" ? (
          <>
            <div
              className={`
                flex items-center gap-1 px-2 py-0.75 rounded-md text-xs font-semibold border
                ${isPositive && "bg-green3/10 text-green1 border-green1"}
                ${isNegative && "bg-red-100 text-red-400 border-red-400"}
              `}
            >
              {Math.abs(change)}
              {isPositive && (
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-green1"></div>
              )}
              {isNegative && (
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-red-400"></div>
              )}
            </div>

            <span className="text-sm text-green1">
              {isPositive && "Increased"}
              {isNegative && "Decreased"} from last month
            </span>
          </>
        ) : (
          <span className="text-sm text-green1">{statusText}</span>
        )}
      </div>
    </section>
  );
};

export default MetricsCard;
