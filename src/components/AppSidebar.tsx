import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Warehouse,
  Truck,
  Users,
  ArrowDownToLine,
  ArrowUpFromLine,
  HardHat,
  RotateCcw,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Box,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Mahsulotlar", url: "/products", icon: Package },
  { title: "Ombor", url: "/stock", icon: Warehouse },
  { title: "Yetkazuvchilar", url: "/suppliers", icon: Truck },
  { title: "Mijozlar", url: "/customers", icon: Users },
  { title: "Kirim", url: "/incoming", icon: ArrowDownToLine },
  { title: "Sotuv / Chiqim", url: "/sales", icon: ArrowUpFromLine },
  { title: "Obyektga sarf", url: "/projects", icon: HardHat },
  { title: "Qaytarishlar", url: "/returns", icon: RotateCcw },
  { title: "Hisobotlar", url: "/reports", icon: BarChart3 },
  { title: "Sozlamalar", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-60"
      } min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 flex flex-col shrink-0`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <Box className="h-7 w-7 text-sidebar-primary shrink-0" />
        {!collapsed && (
          <span className="ml-3 text-lg font-bold text-sidebar-primary-foreground tracking-tight">
            OmborPro
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.url || 
            (item.url !== "/" && location.pathname.startsWith(item.url));
          return (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/"}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              }`}
              activeClassName=""
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="h-12 flex items-center justify-center border-t border-sidebar-border text-sidebar-muted hover:text-sidebar-accent-foreground transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </aside>
  );
}
