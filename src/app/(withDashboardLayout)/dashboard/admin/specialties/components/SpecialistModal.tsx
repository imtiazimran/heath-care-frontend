import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import PhModal from "@/components/shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpecialistModal = ({ open, setOpen }: TProps) => {
    const handleFormSubmit = (data: FieldValues) => {
        console.log("Form Data: ", data);
    }
    return (
        <PhModal open={open} setOpen={setOpen} title="Create Speciality">

            <PHForms onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <PHInput name="title" label="title" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <PHInput name="title" label="title" />
                    </Grid>
                </Grid>
                    <Button sx={{ mt: 2 }} type="submit" color="primary">Create</Button>
            </PHForms>

        </PhModal>
    );
};

export default SpecialistModal;