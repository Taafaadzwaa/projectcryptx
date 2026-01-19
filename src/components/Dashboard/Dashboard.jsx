import React from "react";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import DashboardContent from "./DashboardContent"; // your BTC blocks, chart, tables

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <Header />

        {/* Dashboard content */}
        <div className="flex-1 overflow-auto p-6">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
