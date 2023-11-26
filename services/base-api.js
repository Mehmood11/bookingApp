// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
//   prepareHeaders: headers,
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
