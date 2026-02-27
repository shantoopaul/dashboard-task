import { Video } from "lucide-react";

function ReminderCard() {
  return (
    <div className="col-span-1 rounded-2xl bg-white p-6 h-full flex flex-col">
      <p className="text-xl font-medium text-gray-800 mb-4">Reminders</p>
      <h3 className="mt-2 text-2xl font-semibold text-green3 leading-none">
        Meeting with Arc Company
      </h3>
      <p className="mt-2 mb-6 text-gray-400">Time : 02.00 pm - 04.00 pm</p>

      <button className="mt-auto w-full flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white text-lg bg-linear-to-b from-green3 to-green2 hover:opacity-90 active:scale-[0.98] transition-all duration-200">
        <Video size={20} />
        Start Meeting
      </button>
    </div>
  );
}

export default ReminderCard;
