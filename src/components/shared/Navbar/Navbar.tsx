"use client"

import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter()
    const [userInfo, setUserInfo] =useState<any>(null)
    

    useEffect(()=>{
        const user = getUserInfo()
        setUserInfo(user)
    },[])

   const handleLogout = () => {
        removeUserInfo();
        setUserInfo(null)
    }
    return (
        <Container>
            <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
                <Typography className="no-underline" component={Link} variant="h4" href={"/"} fontWeight={600} >
                    P <Box component={"span"} color={"primary.main"}>H</Box>  Heath Care
                </Typography>
                <Stack direction="row" gap={2} justifyContent={"space-between"}>
                    <Typography component={Link} href="/consultation">Consultation</Typography>
                    <Typography component={Link} href="/>HeathPlans">Heath Plans</Typography>
                    <Typography component={Link} href="/medicine">Medicine</Typography>
                    <Typography component={Link} href="/login">Diagonostics</Typography>
                    <Typography component={Link} href="/login">NGOs</Typography>
                </Stack>
                {
                    userInfo?.userId ? (

                        <Button color="error"  onClick={handleLogout} >Log Out</Button>
                    ) :
                        (
                            <Button component={Link} href="/login">Login</Button>
                        )
                }
            </Stack>
        </Container>
    );
};

export default Navbar;