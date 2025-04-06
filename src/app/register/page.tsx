"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  contact: string;
  address: string;
}; 
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div>
          <Container >
            <Stack sx={{
              height: '100dvh',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Box 
              sx={{
                maxWidth: 600,
                width: '100%',
                boxShadow: 1,
                borderRadius: 1,
                padding: 4,
                textAlign: 'center',
              }}>
                <Stack sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Box>
                    <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Patient Register
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                 <form onSubmit={handleSubmit(onSubmit)}>
                 <Grid container spacing={2} my={1}>
                    <Grid item md={12}>
                    <TextField {...register("name")} size="small" fullWidth={true} id="name" label="Name" type="text" variant="outlined" />
                    </Grid>

                    <Grid item md={6}>
                    <TextField {...register("email")} size="small" fullWidth={true} id="email" label="Email" type="email" variant="outlined" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField {...register("password")} size="small" fullWidth={true} id="password" label="Password" type="password" variant="outlined" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField {...register("contact")} size="small" fullWidth={true} id="contact" label="Contact Number" type="tel" variant="outlined" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField {...register("address")} size="small" fullWidth={true} id="address" label="Address" type="text" variant="outlined" />
                    </Grid>
                  </Grid>
                  <Button type="submit" sx={{my: 2}} fullWidth={true} >Register</Button>
                 </form>
                  <Typography component="p" fontWeight={300}>
                     Do you have an account? <Link className="text-[#1586fd]" href="/login">Login</Link>
                    </Typography>
                </Box>
              </Box>
            </Stack>
          </Container>
        </div>
    );
};

export default Register;