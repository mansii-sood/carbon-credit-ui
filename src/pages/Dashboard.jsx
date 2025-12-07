import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const userName = localStorage.getItem("userName") || "Demo User";
  
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar userName={user.name} />

      <div className="max-w-5xl mx-auto mt-8 px-4">
        
        <div className="bg-green-600 text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-lg font-medium">Your Carbon Credit Balance</h2>
          <p className="text-5xl font-bold mt-2">{user.balance}</p>
          <p className="mt-1 opacity-80">Credits Available</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Total Emissions</p>
            <p className="text-2xl font-bold">{user.totalEmissions} kg</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Total Reductions</p>
            <p className="text-2xl font-bold">{user.totalReductions} kg</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Credits Purchased</p>
            <p className="text-2xl font-bold">{user.creditsPurchased}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-600">Credits Shared</p>
            <p className="text-2xl font-bold">{user.creditsShared}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-10 mb-3 text-green-800">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow text-center hover:bg-gray-50 cursor-pointer">
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

        <h3 className="text-xl font-semibold mt-12 mb-3 text-green-800">
          Recent Transactions
        </h3>

        <div className="bg-white rounded-xl shadow p-6">
          {user.recentTransactions.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No recent transactions available.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2">Date</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Balance</th>
                </tr>
              </thead>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard