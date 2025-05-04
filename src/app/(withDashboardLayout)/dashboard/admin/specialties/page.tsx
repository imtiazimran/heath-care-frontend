'use client';
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";

const Specialties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Box>
         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
            <Button onClick={() => setIsModalOpen(true)} variant="contained" color="primary">
              Create Specialty
            </Button>
            <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
            <TextField placeholder="Search Speacialist" size="small"></TextField>
         </Stack>
        </Box>
    );
};

export default Specialties;