import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type IProps = {
    items: DrawerItem;
}
const SidebarItems = ({ items }: IProps) => {
    const linkPath = `/dashboard/${items.path}`;
    const pathName = usePathname();
    const isActive = pathName === linkPath;
    return (
        <Link href={linkPath}>
            <ListItem sx={isActive ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                    color: "#1586FD"
                }
            } : {}} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {items.icon ? <items.icon /> : <InboxIcon />}
                    </ListItemIcon>
                    <ListItemText primary={items.title} />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

export default SidebarItems;