import React from "react";
import DashboardContent from "./DashboardContent"; // your BTC blocks, chart, tables

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Dashboard content */}
      <div className="flex-1 overflow-auto p-6">
        <DashboardContent />
      </div>
    </div>
  );
}
