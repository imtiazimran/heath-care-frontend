import { Box, Container, Stack, Typography } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png"
import instagram from "@/assets/landing_page/instagram.png"
import twitter from "@/assets/landing_page/twitter.png"
const Footer = () => {
    return (
        <Box padding={5} bgcolor={"rgb(17 26 34)"}>
            <Container >
                <Stack direction="row" gap={4} justifyContent={"center"}>
                    <Typography color={"white"} component={Link} href="/consultation">Consultation</Typography>
                    <Typography color={"white"} component={Link} href="/HeathPlans">Heath Plans</Typography>
                    <Typography color={"white"} component={Link} href="/medicine">Medicine</Typography>
                    <Typography color={"white"} component={Link} href="/login">Diagonostics</Typography>
                    <Typography color={"white"} component={Link} href="/login">NGOs</Typography>
                </Stack>
                <Stack direction="row" gap={4} justifyContent={"center"} py={3}>
                    <Image width={40} height={40} src={facebookIcon} alt="facebook" />
                    <Image width={40} height={40} src={instagram} alt="instagram" />
                    <Image width={40} height={40} src={twitter} alt="twitter" />
                    <Image width={40} height={40} src={facebookIcon} alt="linkedin" />
                </Stack>
                <div className="border-b-[1px] border-dashed"></div>
                <Stack direction="row" gap={4} justifyContent={"space-between"} alignItems={"center"} py={3}>
                    <Typography color={"white"} component={Link} href="/about">
                        &copy; {new Date().getFullYear()} All Rights Reserved
                    </Typography>
                    <Typography color="white" className="no-underline" component={Link} variant="h4" href={"/"} fontWeight={600} >
                        P <Box component={"span"} color={"primary.main"}>H</Box>  Heath Care
                    </Typography>
                    <Typography>
                        <Box component={"span"} color={"white"}>Privacy Policy || </Box>
                        <Box component={"span"} color={"white"}>Terms of Service</Box>
                    </Typography>
                </Stack>
            </Container>

        </Box>
    );
};

export default Footer;