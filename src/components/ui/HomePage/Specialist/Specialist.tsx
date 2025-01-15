import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";


const Specialist = async () => {
    const res = await fetch("http://localhost:5000/api/v1/specialties");
    const { data: specialists } = await res.json();
    return (
        <Container>
            <Box
                sx={{
                    margin: "40px 0px",
                    textAlign: "center",
                }}
            >
                <Box
                textAlign={"start"}
                >
                    <Typography variant="h4" fontWeight={600} textTransform={"capitalize"}>Explore treatment across specialtist</Typography>
                    <Typography component={"p"} fontWeight={300} fontSize={18} textTransform={"capitalize"}>Experienced Doctors All Specialtist</Typography>
                </Box>
                <Stack direction="row" gap={4} mt={4}>
                    {specialists.map((specialist: any) => (
                        <Box key={specialist.id} sx={
                            {
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 4,
                                padding: 4,
                                border: "1px solid #e0e0e0",
                                borderRadius: 8,
                                "& img": {
                                    width: 50,
                                    height: 50,
                                    margin: "0 auto"
                                },
                                "&:hover": {
                                    border: "1px solid blue"
                                }
                        }}>
                             <Box>
                                <Image width={100} height={100} src={specialist.icon} alt={specialist.name} />
                                <Box>

                                    <Typography variant="h6" fontWeight={600} mt={2}>{specialist.title}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Stack>
                <Button sx={{
                    marginTop: "10px"
                }} variant="outlined">
                    View All
                </Button>
            </Box>
        </Container>
    );
};

export default Specialist;