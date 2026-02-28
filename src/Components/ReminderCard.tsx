import { Video } from "lucide-react";

const ReminderCard = () => {
  return (
    <div className="col-span-1 lg:col-span-2 xl:col-span-4 row-span-7 h-full flex flex-col justify-center rounded-2xl bg-white p-4">
      <p className="text-xl font-medium text-gray-800 mb-4">Reminders</p>
      <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-green3 leading-none">
        Meeting with Arc Company
      </h3>
      <p className="mt-2 mb-6 text-gray-400">Time : 02.00 pm - 04.00 pm</p>

      <button className="mt-auto w-full flex items-center justify-center gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-white text-lg bg-linear-to-b from-green3 to-green2 hover:opacity-90 active:scale-[0.98] transition-all duration-200">
        <Video size={20} />
        Start Meeting
      </button>
    </div>
  );
};

export default ReminderCard;
