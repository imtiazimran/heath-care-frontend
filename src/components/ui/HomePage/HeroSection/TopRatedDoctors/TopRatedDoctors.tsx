import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"; // Use Grid from '@mui/material'
import Image from "next/image";
import PlaceIcon from '@mui/icons-material/Place';
import { LocationOn } from "@mui/icons-material";

const TopRatedDoctors = async () => {
  const res = await fetch('http://localhost:5000/api/v1/doctor?limit=3');
  const { data: doctors } = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        background: "rgba(20,20,20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%,100% 100%, 0 75%)",
      }}
    >
      <Box textAlign={"center"}>
        <Typography variant="h4" fontWeight={600} textTransform={"capitalize"}>
          Our Top Rated Doctors
        </Typography>
        <Typography component={"p"} fontWeight={300} fontSize={18} textTransform={"capitalize"}>
          Access to expert physicians and surgeons, advanced technologies <br /> and top-quality surgery facilities right here
        </Typography>
      </Box>

      <Container sx={{
        margin: "30px auto"
      }}>
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid item xs={12} sm={6} md={4} key={doctor.id}>
              <Card>
                <Box
                    sx={{
                        width: "100%",
                        height: 300,
                        "&img": {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            objectFit: "cover"
                        }
                    }}
                >
                    <Image  src={doctor.profilePhoto} alt="doctor" width={500} height={100} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {doctor.designation || "No designation available."} , {doctor.qualification || "No qualification available."}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }} >
                    <LocationOn/> {doctor.address || "No address available."}
                  </Typography>
                </CardContent>
                <CardActions sx={{
                    justifyContent: "space-between",
                    px: 2,
                    pb: 2,
                }}>
                  <Button >Book Now</Button>
                  <Button variant="outlined">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{
            textAlign: "center",
            mt: 5,
        }}>
        <Button  variant="outlined">
                    View All
                </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
