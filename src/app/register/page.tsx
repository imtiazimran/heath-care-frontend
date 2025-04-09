"use client"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatients";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";




const Register = () => {
  const router = useRouter()

  const handleRegister = async (values: FieldValues) => {

    const data = modifyPayload(values)

    try {

      const response = await registerPatient(data)
      if (response?.data?.id) {
        toast.success(response?.message);
        const loginRes = await userLogin({ password: values.password, email: values.patient.email });
        if (loginRes?.data?.accessToken) {
          storeUserInfo(loginRes?.data?.accessToken)
          router.push("/")
        }
      }
      console.log(response);


    } catch (error) {
      toast.error("Registration failed. Please try again.")
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }

    }


    console.log(data);

  }

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
              <PHForms onSubmit={handleRegister}>
                <Grid container spacing={2} my={1}>
                  <Grid item md={12}>
                    <PHInput name="patient.name" size="small" fullWidth={true}  label="Name" type="text" />
                  </Grid>

                  <Grid item md={6}>
                    <PHInput name="patient.email" size="small" fullWidth={true} label="Email" type="email" />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput name="password" size="small" fullWidth={true}  label="Password" type="password" />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput name="patient.contactNumber" size="small" fullWidth={true}  label="Contact Number" type="tel" />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput name="patient.address" required={false} size="small" fullWidth={true}  label="Address" type="text" />
                  </Grid>
                </Grid>
                <Button type="submit" sx={{ my: 2 }} fullWidth={true} >Register</Button>
              </PHForms>
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