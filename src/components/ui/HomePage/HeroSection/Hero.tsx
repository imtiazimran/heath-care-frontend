import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assests from "@/assets";
const HeroSection = () => {
    return (
        <Container sx={{
            display: "flex",
            direction: "row",
            my: 16,
        }}>
            <Box sx={{ flex: 1, position: "relative" }}>
                <Box sx={{ position: "absolute", width: "700px", top: "-90px", left: "-120px" }}>
                    <Image className="-z-50" src={assests.svgs.grid} alt="Grid" width={500} height={500} />
                </Box>
                <Typography variant="h3" component={"h1"} fontWeight={600}>
                    Healthier Hearts
                </Typography>
                <Typography variant="h3" component={"h1"} fontWeight={600}>
                    Come From
                </Typography>
                <Typography color="primary.main" variant="h3" component={"h1"} fontWeight={600}>
                    Preventive Care
                </Typography>
                <Typography
                    variant="h6"
                    component={"p"}
                    fontWeight={300}
                    paddingTop={4}
                    zIndex={100}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quaerat, cupiditate omnis ad repudiandae hic natus cum, tempore neque voluptatem vitae commodi, iusto quibusdam fugiat. Perferendis odio consequatur culpa voluptatibus!
                </Typography>
                <Stack direction="row" gap={2} mt={4}>
                    <Button>Make Appointment</Button>
                    <Button variant="outlined">Contact Us</Button>
                </Stack>
            </Box>
            
            <Box sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "0px",
            }}>

                <Box sx={{ position: "absolute", top: "-30px", left: "200px" }}>
                    <Image width={100} height={100} src={assests.svgs.arrow} alt="arrow" />
                </Box>
                <Box mt={4} sx={{ display: "flex", gap: 2 }}>
                    <Box>
                        <Image width={240} height={380} src={assests.images.doctor1} alt="doctor 1" />
                    </Box>
                    <Box>
                        <Image width={240} height={350} src={assests.images.doctor2} alt="doctor 2" />
                    </Box>
                </Box>
                <Box sx={{
                    position: "absolute",
                    top: "200px",
                    left: "150px",
                    zIndex: 100,
                    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))",
                }}>
                    <Image width={250} height={250} src={assests.images.doctor3} alt="doctor 3" />
                </Box>
                <Box sx={{
                    position: "absolute",
                    bottom: "-100px",
                    right: "0px",
                    zIndex: -1,
                    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))",
                }}>
                    <Image width={180} height={180} src={assests.images.stethoscope} alt="stethoscope" />
                </Box>
            </Box>


        </Container>
    );
};

export default HeroSection;