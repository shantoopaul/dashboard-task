import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square } from "lucide-react";

const formatTime = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return `${hrs}:${mins}:${secs}`;
};

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="rounded-2xl overflow-hidden relative">
      <img
        src="/timeTrackerBg.png"
        alt="Time Tracker Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        <h3 className="text-xl font-medium">Time Tracker</h3>

        <div className="flex flex-col items-center gap-4">
          <div className="text-5xl font-semibold tracking-tight leading-none">
            {formatTime(seconds)}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleStartPause}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-green-600 shadow-md hover:scale-105 transition"
            >
              {isRunning ? <Pause size={22} /> : <Play size={22} />}
            </button>

            <button
              onClick={handleStop}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white shadow-md hover:scale-105 transition"
            >
              <Square size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
