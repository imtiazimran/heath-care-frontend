"use client";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


const validationSchema = z.object({
  email: z.string().email("Invalid email address!").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})


const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("")

  const handleLogin = async (data: FieldValues) => {
    try {
      const response = await userLogin(data);
      if (response?.data?.accessToken) {
        toast.success(response?.message)
        storeUserInfo(response?.data?.accessToken)
        router.push("/dashboard")
      }
      else {
        setError(response?.message)
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

          {
            error && (
              <Box my={2}>
                <Typography fontWeight={300} sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  color: "white",
                  borderRadius: "2px",
                  marginTop: "5px",

                }}>
                  {error}
                </Typography>
              </Box>
            )
          }

          <Box>
            <PHForms
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    size="small"
                    fullWidth
                    label="Email"
                    type="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    size="small"
                    fullWidth
                    label="Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Button sx={{ my: 2 }} fullWidth type="submit">
                Login
              </Button>
            </PHForms>
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