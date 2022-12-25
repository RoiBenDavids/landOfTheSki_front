import { createApi } from "@reduxjs/toolkit/query/react";

import {
  transformResponseFromData,
  provideTags,
  axiosBaseQuery,
  baseUrl,
} from "../common";

const skiGearsApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  reducerPath: "skiGears",
  tagTypes: ["Gear"],
  endpoints: (build) => ({
    getSkiGearWithPrices: build.mutation({
      query: ({ site, queryParams }) => {
        return {
          url: `/skiGear/with_prices/${site}`,
          method: "GET",
          params: queryParams,
        };
      },
      transformResponse: transformResponseFromData,
      providesTags: (data) => provideTags("Gear", data),
    }),
  }),
});
export default skiGearsApi;

export const { useGetSkiGearWithPricesMutation } = skiGearsApi;
