import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
 

type Inputs = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <Container>
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
                      Login
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                 <form>
                 <Grid container spacing={2} my={1}>
                    <Grid item md={6}>
                    <TextField size="small" fullWidth={true} id="outlined-basic" label="Email" type="email" variant="outlined" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField size="small" fullWidth={true} id="outlined-basic" label="Password" type="password" variant="outlined" />
                    </Grid>
                    

                  </Grid>
                  
                  <Button sx={{my: 2}} fullWidth={true} >Login</Button>
                 </form>
                 <Typography my={2} component="p" fontWeight={300}>
                    Forgot Password? <Link className="text-[#1586fd]" href="/forgot-password">Reset</Link>
                    </Typography>
                  <Typography component="p" fontWeight={300}>
                     Don&apos;t have an account? <Link className="text-[#1586fd]" href="/register">Register</Link>
                    </Typography>
                    
                </Box>
          </Box>
         </Stack>
        </Container>
    );
};

export default LoginPage;