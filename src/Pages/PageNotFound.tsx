import { useNavigate, useLocation } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className={`relative w-full h-full overflow-hidden bg-cover bg-center flex items-center justify-center ${
          isDashboardRoute ? "rounded-2xl" : ""
        }`}
        style={{ backgroundImage: "url('/pageNotFound.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6 z-10">
          <h2 className="text-base md:text-xl font-semibold mb-4">404</h2>

          <h3 className="text-5xl md:text-7xl font-bold mb-6">
            Page not found
          </h3>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="text-lg font-medium hover:underline hover:text-green1 transition"
          >
            ← Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
