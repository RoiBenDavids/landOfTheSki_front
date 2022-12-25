import axios from "axios";

export const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, body, params }) => {
    try {
      console.log({ baseUrl, url, method, body }, "AXIOS REQUEST");
      return await axios({
        url: baseUrl + url,
        method,
        data: body,
        params,
      });
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const transformResponseFromData = (response) => {
  console.log({ response }, "transform response from data");
  return response.data;
};

export const provideTags = (tagName, data) => {
  return data ? data.map(({ _id }) => ({ type: tagName, id: _id })) : [{}];
};
export const provideTag = (tagName, data, tagField) => {
  return data ? { type: tagName, id: data[tagField] } : null;
};

export const baseUrl = "http://localhost:3301/api/v1/";
