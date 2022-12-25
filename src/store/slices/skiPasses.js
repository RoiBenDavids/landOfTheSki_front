import { createApi } from "@reduxjs/toolkit/query/react";

import {
  transformResponseFromData,
  provideTags,
  axiosBaseQuery,
  baseUrl,
} from "../common";

const skiPassesApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  reducerPath: "skiPasses",
  tagTypes: ["Pass"],
  endpoints: (build) => ({
    getSkiPassWithPrices: build.mutation({
      query: ({ site, queryParams }) => {
        return {
          url: `/skiPasses/with_prices/${site}`,
          method: "GET",
          params: queryParams,
        };
      },
      transformResponse: transformResponseFromData,
      providesTags: (data) => provideTags("Pass", data),
    }),
  }),
});
export default skiPassesApi;

export const { useGetSkiPassWithPricesMutation } = skiPassesApi;
