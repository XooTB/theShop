import {
  Dashboard,
  Summarize,
  People,
  BorderAll,
  Inventory,
} from "@mui/icons-material";

export const sidebarProps = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
    to: "/dashboard",
  },
  {
    label: "Summary",
    icon: <Summarize />,
    to: "/dashboard/summary",
  },
  {
    label: "Customers",
    icon: <People />,
    to: "/dashboard/customers",
  },
  {
    label: "Orders",
    icon: <BorderAll />,
    to: "/dashboard/orders",
  },
  {
    label: "Products",
    icon: <Inventory />,
    to: "/dashboard/products",
  },
];
