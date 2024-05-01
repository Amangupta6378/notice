import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonitorIcon from '@mui/icons-material/Monitor';
import CampaignIcon from '@mui/icons-material/Campaign';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/Dashboard",
  },
  {
    title: "Message",
    icon: <EmailIcon />,
    link: "/mailbox",
  },
  {
    title: "Catalog",
    icon: <MonetizationOnIcon />,
    link: "/sale",
  },
  // {
  //   title: "Customers",
  //   icon: <ReceiptIcon />,
  //   // link: "/Customers",
  // },
  {
    title: "CMS",
    icon: <MonitorIcon />,
    link: "/CMS",
  },
  {
    title: "Announcement",
    icon: <CampaignIcon />,
    link: "/marketing",
  },
  {
    title: "Reporting",
    icon: <SummarizeIcon/>,
    link: "/reporting",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/Settings",
  },
  {
    title: "Configure",
    icon: <ManageHistoryIcon />,
    link: "/configure",
  },
];
