
import { createElement } from 'react';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const topSidebarItem = [
    {
        title: "Dashboard",
        icon: createElement(DashboardOutlined),
        href: "/",
    },
    {
        title: "Inventory",
        icon: createElement(Inventory2OutlinedIcon),
        href: "/inventory",
    },
] as const;

export const bottomSidebarItem = [
    {
        title: "Profile",
        icon: createElement(AccountCircleOutlinedIcon),
        href: "/profile",
    },
    {
        title: "Settings",
        icon: createElement(SettingsOutlinedIcon),
        href: "/settings",
    },
] as const;