import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Register failed");
      // on success redirect to login
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-green-600 font-bold text-center mb-6">🌱Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} required
              className="w-full p-2 border rounded focus:ring focus:ring-green-200" placeholder="Enter full name" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input name="email" value={form.email} onChange={handleChange} required type="email"
              className="w-full p-2 border rounded focus:ring focus:ring-green-200" placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input name="password" value={form.password} onChange={handleChange} required type="password"
              className="w-full p-2 border rounded focus:ring focus:ring-green-200" placeholder="Create password" />
          </div>
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
        </form>
        <p className="mt-4 text-center text-sm">Already have an account? <Link to="/" className="text-green-700">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
