import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import chooseUs from '@/assets/choose-us.png';
import Image from "next/image";
const servicesData = [
    {
        imageSrc: assets.svgs.award,
        title: "Award Winning Service",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.care,
        title: "Best Quality Pregnancy Care",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.equipment,
        title: "Complete Medical Equipments",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.call,
        title: "Dedicated Emergency Care",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
];
const WhyUs = () => {
    return (
        <Container>
            <Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        color="primary"
                        variant="h6"
                        component={"h1"}
                        fontWeight={700}
                    >
                        Why Us
                    </Typography>
                    <Typography variant="h4" component={"h1"} fontWeight={700}>
                        Why Choose Us
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={2} my={5}>
                <Grid item md={6}>
                    <Box sx={{
                        display: "flex",
                        padding: "15px",
                        gap: 2,
                        borderRadius: "10px 10px 100px 10px",
                        backgroundColor: "rgba(245, 245, 245,1)",
                        alignItems: "center"
                    }}>
                        <Box sx={{backgroundColor: "white", padding: "10px", borderRadius: "10px"}}><Image src={servicesData[0].imageSrc} width={80} height={80} alt="Award" /> </Box>
                        <Box>
                            <Typography variant="h6" component={"h6"} fontWeight={700}>
                               {servicesData[0].title}
                            </Typography>
                            <Typography variant="body2" color="primary.body1" fontWeight={300}>
                               {servicesData[0].description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        padding: "15px",
                        gap: 2,
                        borderRadius: "10px 100px 10px 10px",
                        backgroundColor: "rgba(245, 245, 245,1)",
                        alignItems: "center",
                        margin: "20px 0px"
                    }}>
                        <Box sx={{backgroundColor: "white", padding: "10px", borderRadius: "10px"}}><Image src={servicesData[1].imageSrc} width={80} height={80} alt="Award" /> </Box>
                        <Box>
                            <Typography variant="h6" component={"h6"} fontWeight={700}>
                               {servicesData[1].title}
                            </Typography>
                            <Typography variant="body2" color="primary.body1" fontWeight={300}>
                               {servicesData[1].description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        padding: "15px",
                        gap: 2,
                        borderRadius: "10px 10px 100px 10px",
                        backgroundColor: "rgba(245, 245, 245,1)",
                        alignItems: "center"
                    }}>
                        <Box sx={{backgroundColor: "white", padding: "10px", borderRadius: "10px"}}><Image src={servicesData[2].imageSrc} width={80} height={80} alt="Award" /> </Box>
                        <Box>
                            <Typography variant="h6" component={"h6"} fontWeight={700}>
                               {servicesData[2].title}
                            </Typography>
                            <Typography variant="body2" color="primary.body1" fontWeight={300}>
                               {servicesData[2].description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        padding: "15px",
                        gap: 2,
                        borderRadius: "10px 10px 100px 10px",
                        backgroundColor: "rgba(245, 245, 245,1)",
                        alignItems: "center",
                        margin: "20px 0px"
                    }}>
                        <Box sx={{backgroundColor: "white", padding: "10px", borderRadius: "10px"}}><Image src={servicesData[3].imageSrc} width={80} height={80} alt="Award" /> </Box>
                        <Box>
                            <Typography variant="h6" component={"h6"} fontWeight={700}>
                               {servicesData[3].title}
                            </Typography>
                            <Typography variant="body2" color="primary.body1" fontWeight={300}>
                               {servicesData[3].description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} sx={{
                    display: "flex"
                }}> 
                    <Box sx={{
                        justifyContent: "center"
                    }}>
                    <Image width={400} src={chooseUs} alt="why choose us photo" />

                    </Box>
                     </Grid>
            </Grid>

        </Container>
    );
};

export default WhyUs;