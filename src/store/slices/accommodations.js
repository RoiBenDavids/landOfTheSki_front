import { createApi } from "@reduxjs/toolkit/query/react";

import {
  transformResponseFromData,
  provideTags,
  axiosBaseQuery,
  baseUrl,
} from "../common";

const accommodationsApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  reducerPath: "accommodations",
  tagTypes: ["Room"],
  endpoints: (build) => ({
    getAccommodationsBySite: build.query({
      query: (site) => ({
        url: `/accommodations/${site}`,
        method: "GET",
      }),
      transformResponse: transformResponseFromData,
      providesTags: (data) => provideTags("Room", data),
    }),
    getRoomsWithProcesBySite: build.mutation({
      query: ({ site, queryParams }) => {
        console.log(
          { site, queryParams },
          "STORE - get Rooms With Proces BySite"
        );
        return {
          url: `/accommodations/rooms_with_prices/${site}`,
          method: "GET",
          params: queryParams,
        };
      },
      transformResponse: transformResponseFromData,
      providesTags: (data) => provideTags("Room", data),
    }),
    getRoomsWithProcesBySite2: build.query({
      query: ({ site, queryParams }) => {
        console.log(
          { site, queryParams },
          "STORE - get Rooms With Proces BySite - query"
        );
        return {
          url: `/accommodations/rooms_with_prices/${site}`,
          method: "GET",
          params: queryParams,
        };
      },
      transformResponse: transformResponseFromData,
      providesTags: (data) => provideTags("Room", data),
    }),
  }),
});
export default accommodationsApi;

export const {
  useGetAccommodationsBySiteQuery,
  useGetRoomsWithProcesBySiteMutation,
} = accommodationsApi;
