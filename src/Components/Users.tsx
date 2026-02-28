import { Plus } from "lucide-react";
import { type DashboardUser } from "../api/dashboard";

type UsersProps = {
  users: DashboardUser[];
};

const Users = ({ users }: UsersProps) => {
  return (
    <div className="col-span-1 lg:col-span-3 xl:col-span-4 row-span-10 h-full flex flex-col justify-center rounded-2xl bg-white p-4">
      <div className="mb-4 flex justify-between">
        <h3 className="text-xl font-medium text-gray-800">Users</h3>
        <button className="flex items-center gap-2 rounded-full border border-green2 px-4 py-1.5 text-sm font-medium text-green2 transition hover:bg-green-50">
          <Plus size={16} />
          New
        </button>
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden shrink-0">
              <img
                src={`https://i.pravatar.cc/300?u=${user.email}`}
                alt={user.name}
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </div>
            <span
              className={`shrink-0 mt-0.5 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                user.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {user.status === "active" ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
