import { createApi } from "@reduxjs/toolkit/query/react";

import {
  transformResponseFromData,
  provideTags,
  axiosBaseQuery,
  baseUrl,
} from "../common";

const transfersApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  reducerPath: "transfers",
  tagTypes: ["Transfer"],
  endpoints: (build) => ({
    getTransfersWithPrices: build.mutation({
      query: ({ site, queryParams }) => {
        return {
          url: `/transfers/with_prices/${site}`,
          method: "GET",
          params: queryParams,
        };
      },
      transformResponse: transformResponseFromData,
      providesTags: (data) => provideTags("Transfer", data),
    }),
  }),
});
export default transfersApi;

export const { useGetTransfersWithPricesMutation } = transfersApi;
