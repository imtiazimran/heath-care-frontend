"use server"

import { FieldValues } from "react-hook-form"

export const userLogin = async (payload: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
    }
    )

    const data = await res.json()

    return data;
}