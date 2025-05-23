import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TPHInputProps = {
    name: string;
    size?: "small" | "medium";
    fullWidth?: boolean;
    label?: string;
    type?: string;
    sx?: SxProps;
    placeholder?: string;
    required?: boolean;
}

const PHInput = ({name, size, fullWidth, label, type, sx, placeholder }: TPHInputProps) => {
    const { control } = useFormContext(); 
    return (
        <Controller
        control={control}
        name={name}
        render={({ field, fieldState: {error} }) => (
            <TextField
            {...field}
            sx={{...sx}}
            size={size || "small"}
            fullWidth={fullWidth || true}
            label={label || "Enter your text"}
            type={type || "text"}
            variant="outlined"
            placeholder={placeholder || label || "Enter your text"}
            error={!!error?.message}
            helperText={error?.message}
            />
        )}
      />
    );
};

export default PHInput;