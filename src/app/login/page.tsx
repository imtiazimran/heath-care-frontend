"use client";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export type TLoginInfo = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInfo>();

  const onSubmit: SubmitHandler<TLoginInfo> = async (data) => {
    
    try {
      const response = await userLogin(data);
      if(response?.data?.accessToken){
        toast.success(response?.message)
        storeUserInfo(response?.data?.accessToken)
        router.push("/")
      }
       
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.log(error);
    }
    
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100dvh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <TextField
                    size="small"
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    size="small"
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    {...register("password", { required: "Password is required" })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Grid>
              </Grid>
              <Button sx={{ my: 2 }} fullWidth type="submit">
                Login
              </Button>
            </form>
            <Typography my={2} component="p" fontWeight={300}>
              Forgot Password?{" "}
              <Link className="text-[#1586fd]" href="/forgot-password">
                Reset
              </Link>
            </Typography>
            <Typography component="p" fontWeight={300}>
              Don&apos;t have an account?{" "}
              <Link className="text-[#1586fd]" href="/register">
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;