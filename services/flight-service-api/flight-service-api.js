import { baseAPI } from "../base-api";

export const jsonAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query({
      query: ({ params }) => {
        console.log(params);
        return({
        url: `https://jsonplaceholder.typicode.com/users?`,
        params,
      })},
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useLazyUsersQuery } = jsonAPI;
