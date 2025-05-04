import { Box, Container, Grid } from "@mui/material";

const Statistics = () => {
    return (
        <Box mb={2}>
          <Container>
            <Box sx={{
                background: "linear-gradient(to right, #0e82ff, #60b7f8)",
                color: "white",
                borderRadius: "10px",
                padding: "30px 0px",
                marginTop: "20px",
                marginBottom: "20px",
            }}>
            <Grid container justifyContent={"space-between"} padding={"10px"} alignItems={"center"} spacing={2} >
        <Grid item xs={12} md={3} textAlign={"center"} fontSize={'1.5rem'} sx={{fontWeight: "bold"}} font-family={'sans-serif'}>
            180+ <br />
            <span>Expart Doctors</span>
        </Grid>
        <Grid item xs={12} md={3} textAlign={"center"} fontSize={'1.5rem'} sx={{fontWeight: "bold"}} font-family={'sans-serif'}>
            26+ <br />
            <span>Expart Service</span>
        </Grid>
        <Grid item xs={12} md={3} textAlign={"center"} fontSize={'1.5rem'} sx={{fontWeight: "bold"}} font-family={'sans-serif'}>
            10K+ <br />
            <span>Happy Patients</span>
        </Grid>
        <Grid item xs={12} md={3} textAlign={"center"} fontSize={'1.5rem'} sx={{fontWeight: "bold"}} font-family={'sans-serif'}>
            150+ <br />
            <span>Best Award Winner</span>
        </Grid>
        

            </Grid>
            </Box>
          </Container>
        </Box>
    );
};

export default Statistics;