import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useFormContext } from 'react-hook-form';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

type PHFileUploadProps = {
    name: string;
    label: string;
    variant?: 'text' | 'outlined' | 'contained' | undefined;
}


export default function PHFileUpload({ name, label, variant }: PHFileUploadProps) {
    const { control } = useFormContext(); 
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Button
                {...field}
                    component="label"
                    role={undefined}
                    variant={variant || 'outlined'}
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    {label}
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                    />
                </Button>
            )}
        />
    );
}
