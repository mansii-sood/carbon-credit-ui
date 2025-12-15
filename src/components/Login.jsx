import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Login failed");
      localStorage.setItem("token", data.token);

localStorage.setItem("user", JSON.stringify({
  name: data.name,
  balance: 0,
  totalEmissions: 0,
  totalReductions: 0,
  creditsPurchased: 0,
  creditsShared: 0,
  recentTransactions: []
}));

navigate("/dashboard");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-green-600 font-bold text-center mb-6">🌱 Carbon Credit System</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} required type="email"
              className="w-full p-2 border rounded focus:ring focus:ring-green-200" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input name="password" value={form.password} onChange={handleChange} required type="password"
              className="w-full p-2 border rounded focus:ring focus:ring-green-200" placeholder="Enter password" />
          </div>
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Login</button>
        </form>
        <p className="mt-4 text-center text-sm">Don’t have an account? <Link to="/register" className="text-green-700">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
