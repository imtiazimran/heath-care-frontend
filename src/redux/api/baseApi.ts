import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL as string,
    }),
    endpoints: (build) => ({ }),
})
