import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl text-green-600 font-bold text-center mb-6">🌱 Carbon Credit System</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:ring focus:ring-green-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:ring focus:ring-green-200"
              placeholder="Enter password"
            />
          </div>

          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-700 font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login