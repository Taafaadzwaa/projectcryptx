import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bitcoin } from "lucide-react"; // only Bitcoin icon from lucide

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart data
const btcData = {
  labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
  datasets: [
    {
      label: "BTC Price ($)",
      data: [200, 400, 350, 600, 500, 750],
      backgroundColor: "#7F3DFF", // purple bars
    },
  ],
};

export default function DashboardContent() {
  // Bitcoin blocks
  const stats = [
    { title: "Bitcoin", value: "$40,291", img: "/assets/bitcoin.png" },
    { title: "Ethereum", value: "$3,200", img: "/assets/ethereum.png" },
    { title: "Litecoin", value: "$180", img: "/assets/litecoin.png" },
    { title: "Cardano", value: "$1.20", img: "/assets/cardano.png" },
  ];

  const liveMarket = [
    { coin: "Bitcoin", symbol: "BTC", price: "$40,291", change: "+2.3%" },
    { coin: "Ethereum", symbol: "ETH", price: "$3,200", change: "+1.5%" },
    { coin: "Litecoin", symbol: "LTC", price: "$180", change: "-0.5%" },
    { coin: "Cardano", symbol: "ADA", price: "$1.20", change: "+0.8%" },
  ];

  const transactions = [
    { id: 1, user: "Tafadzwa", coin: "BTC", amount: "$2,000", status: "Completed" },
    { id: 2, user: "Jane", coin: "ETH", amount: "$500", status: "Pending" },
    { id: 3, user: "Mike", coin: "LTC", amount: "$150", status: "Completed" },
    { id: 4, user: "Sarah", coin: "ADA", amount: "$300", status: "Failed" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

      {/* Top-left: Bitcoin blocks */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow flex items-center space-x-4">
            <img src={stat.img} alt={stat.title} className="w-8 h-8" />
            <div>
              <p className="text-sm text-slate-500">{stat.title}</p>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Top-right: BTC Bar Graph */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">BTC Price Over Months</h3>
        <Bar
          data={btcData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              y: { min: 0, max: 800, ticks: { stepSize: 200 } },
            },
          }}
        />
      </div>

      {/* Bottom-left: Live Market Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Live Market</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Coin</th>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Symbol</th>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Price</th>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Change</th>
            </tr>
          </thead>
          <tbody>
            {liveMarket.map((coin, i) => (
              <tr key={i} className="border-t border-slate-200 dark:border-slate-700">
                <td className="py-2">{coin.coin}</td>
                <td>{coin.symbol}</td>
                <td>{coin.price}</td>
                <td className={`font-medium ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom-right: Transactions */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Transactions</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2 text-slate-500 dark:text-slate-400">User</th>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Coin</th>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Amount</th>
              <th className="pb-2 text-slate-500 dark:text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t border-slate-200 dark:border-slate-700">
                <td className="py-2">{tx.user}</td>
                <td>{tx.coin}</td>
                <td>{tx.amount}</td>
                <td className={`font-medium ${
                  tx.status === "Completed" ? "text-green-500" :
                  tx.status === "Pending" ? "text-yellow-500" : "text-red-500"
                }`}>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
