"use client"
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
    const AuthButton = dynamic(() => import("@/components/ui/AuthButton/AuthButton"), { ssr: false })
    
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
              <AuthButton />
            </Stack>
        </Container>
    );
};

export default Navbar;