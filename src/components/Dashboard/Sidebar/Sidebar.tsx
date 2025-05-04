import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { userRoles } from "@/types";
import SidebarItems from "./SidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userRole, setUserRole] = useState<userRoles | null>(null);
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUserRole(userInfo.role as userRoles);
    }
  }, []);
  return (
    <Box>
      <Stack component={Link} href={'/'} direction="row" alignItems="center" gap={2} padding={2}>
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" noWrap component="h1" fontWeight={600} color="primary.main" sx={{ cursor: 'pointer' }}>
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as userRoles).map((text, index) => (
          <SidebarItems key={index} items={text} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;