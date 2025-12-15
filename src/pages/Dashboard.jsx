import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";
import MeasureModal from "../components/MeasureModal";
import ReduceModal from "../components/ReduceModal";
import OffsetModal from "../components/OffsetModal";
import ShareModal from "../components/ShareModal";


const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  const [activeModal, setActiveModal] = useState(null);

  const storedUser = localStorage.getItem("user");
  const userName = storedUser ? JSON.parse(storedUser).name : "User";

  console.log(userName);

  useEffect(() => {
    api.get("/dashboard/summary")
      .then(res => setDashboard(res.data))
      .catch(() => setDashboard(null));
  }, []);

  if (!dashboard) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar userName={userName} />

      <div className="max-w-5xl mx-auto mt-8 px-4">

        {/* BALANCE */}
        <div className="bg-green-600 text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-lg font-medium">Your Carbon Credit Balance</h2>
          <p className="text-5xl font-bold mt-2">
            {dashboard.current_balance}
          </p>
          <p className="mt-1 opacity-80">Credits Available</p>
        </div>

        {/* summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Total Emissions</p>
            <p className="text-2xl font-bold">{dashboard.total_emissions} kg</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Total Reductions</p>
            <p className="text-2xl font-bold">{dashboard.total_reductions} kg</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Credits Purchased</p>
            <p className="text-2xl font-bold">{dashboard.total_offsets}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Credits Shared</p>
            <p className="text-2xl font-bold">{dashboard.recent_transactions}</p>
          </div>
        </div>

        {/* quick actions */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-green-800">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div onClick={() => setActiveModal("measure")} className="bg-white p-5 rounded-xl shadow text-center hover:bg-gray-50 cursor-pointer" >
            📊
            <p className="font-medium">Measure</p>
            <p className="text-sm text-gray-600">Track emissions</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center hover:bg-gray-50 cursor-pointer">
            ✏️
            <p className="font-medium">Reduce</p>
            <p className="text-sm text-gray-600">Log activities</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center hover:bg-gray-50 cursor-pointer">
            💚
            <p className="font-medium">Offset</p>
            <p className="text-sm text-gray-600">Buy credits</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center hover:bg-gray-50 cursor-pointer">
            🤝
            <p className="font-medium">Share</p>
            <p className="text-sm text-gray-600">Transfer credits</p>
          </div>
        </div>

        {/* STATS */}
        <div></div>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Stat title="Total Emissions" value={dashboard.total_emissions} />
          <Stat title="Total Reductions" value={dashboard.total_reductions} />
          <Stat title="Total Offsets" value={dashboard.total_offsets} />
          <Stat title="Net Activities" value={
            dashboard.total_emissions +
            dashboard.total_reductions +
            dashboard.total_offsets
          } />
        </div> */}

        {/* RECENT TRANSACTIONS */}
        <h3 className="text-xl font-semibold mt-12 mb-3 text-green-800">
          Recent Transactions
        </h3>

        {/* <div className="bg-white rounded-xl shadow p-6">
          {dashboard.recent_transactions.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No recent transactions available.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2">Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {dashboard.recent_transactions.map((tx, index) => (
                  <tr key={index} className="border-b text-sm">
                    <td className="py-2">Emission</td>
                    <td>{tx.amount || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div> */}

      </div>
    </div>
  );
};

const Stat = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow text-center">
    <p className="text-sm text-gray-600">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
