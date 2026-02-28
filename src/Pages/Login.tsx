import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("user1@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await loginUser(email, password);
      await login(data, rememberMe);
      navigate("/dashboard");
      toast.success("Login successful!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Invalid email or password");
        } else if (error.response?.status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Unexpected error occurred");
        }
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/loginPageBg.jpg')" }}
    >
      <div className="relative w-87.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 pt-8 pb-12 text-center shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/brandLogo.png"
            alt="Donezo Logo"
            className="w-16 h-16 object-cover rounded-full mb-3 shadow-md"
          />
          <h1 className="text-white text-3xl font-semibold tracking-wide">
            Donezo
          </h1>
        </div>

        <h2 className="text-white font-medium uppercase tracking-[5px] text-xl mt-2">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 text-left space-y-4">
          <div>
            <label className="block text-white mb-1 text-lg tracking-wide">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              required
              className="w-full h-10 px-4 rounded-lg text-white text-lg bg-white/5 backdrop-blur-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>

          <div>
            <label className="block text-white mb-1 text-lg tracking-wide">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
              }}
              required
              className="w-full h-10 px-4 rounded-lg text-white text-lg bg-white/5 backdrop-blur-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>

          <div className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="accent-green2"
            />
            <span>Remember Me</span>
          </div>

          <input
            type="submit"
            value={loading ? "Signing in..." : "Sign In"}
            disabled={loading}
            className="flex w-full bg-linear-to-b from-green3 to-green2 text-white px-8 py-4 rounded-full border-2 border-green2 hover:opacity-90 transition-all font-medium text-xl"
          />

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
