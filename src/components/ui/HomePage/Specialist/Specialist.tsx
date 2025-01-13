import { Box, Container, Typography } from "@mui/material";

const Specialist = () => {
    return (
        <Container>
            <Box
                sx={{
                    margin: "40px 0px",
                    textAlign: "start",
                }}
            >
                <Box 
                >
                    <Typography variant="h4" fontWeight={600} textTransform={"capitalize"}>Explore treatment across specialtist</Typography>
                    <Typography component={"p"} fontWeight={300} fontSize={18} textTransform={"capitalize"}>Explore treatment across all specialtist</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Specialist;