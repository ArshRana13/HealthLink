import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full px-6 py-8"
      >
        <div className="rounded-2xl shadow-xl bg-white">
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login to HealthLink</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-lg font-medium text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition ease-in-out duration-200"
              >
                Login
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account? <a onClick={()=>{navigate('/SignUp')}} href="#" className="text-indigo-500 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
