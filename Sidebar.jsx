
import {
  BarChart3,
  CreditCard,
  MessageSquare,
  Settings,
  LayoutDashboard,
  LogOut
} from "lucide-react";
import React from "react";

const menuItems = [
  {
    id: "overview",
    icon: LayoutDashboard,
    label: "Overview",
    active: true,
    badge: "1"
  },
  {
    id: "chart",
    icon: BarChart3,
    label: "Chart",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "wallet",
    icon: CreditCard, // you can replace with a wallet icon if you have one
    label: "Wallet",
  },
  {
    id: "mailbox",
    icon: MessageSquare,
    label: "MailBox",
  
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
  {
    id: "logout",
    icon: LogOut,
    label: "Logout",
  }
];

function Sidebar() {
  return (
    <div className="w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 
      backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
      
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              CryptX
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
              ${item.active 
                ? "bg-blue-500/10 text-purple-600 dark:text-blue-400" 
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>

              {item.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-600 text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile *
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img 
            src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-101806.jpg?semt=ais_hybrid&w=740&q=80"
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500" 
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Tafadzwa Chipangura
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              @ta.ffi
            </p>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Sidebar;
