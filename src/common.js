import _React, { useEffect, useState } from "react";
import _styled from "styled-components";
// import _i18n from "localization/i18n";

export const React = _React;
export const styled = _styled;
// export const i18n = _i18n;

export const useDataHook = (query, getDataMution) => {
  const [data, setData] = useState([]);
  const [getData] = getDataMution();

  const doGetData = async (query, getter, setter) => {
    const data = await getter({
      site: "gudauri",
      queryParams: query,
    });
    if (data.error) {
      console.log(data.error, "GET DATA ERROR");
      return;
    }
    setter(data.data);
  };
  useEffect(() => {
    doGetData(query, getData, setData);
  }, [query, getData]);

  return data;
};
