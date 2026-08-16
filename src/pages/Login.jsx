import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await loginUser(username, password);

      console.log("LOGIN SUCCESS:", data);

      if (data.access) {
        localStorage.setItem("access_token", data.access);
      }

      if (data.refresh) {
        localStorage.setItem("refresh_token", data.refresh);
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-5">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Expense<span className="text-violet-500">X</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Smart expense management
          </p>
        </div>

        <div className="bg-[#171726] border border-violet-500/10 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-2xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2 mb-7">
            Sign in to manage your expenses.
          </p>

          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-xl bg-[#0b0b15] border border-violet-500/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl bg-[#0b0b15] border border-violet-500/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;