import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { createLogger } from "redux-logger";

import accommodationsApi from "./slices/accommodations";
import skiPassesApi from "./slices/skiPasses";
import transfersApi from "./slices/transfers";

// create and filter specific actions
const logger = createLogger({
  predicate: (getState, action) => action.type !== "SET_PROCESSING",
});

const store = configureStore({
  reducer: {
    accommodations: accommodationsApi.reducer,
    transfers: skiPassesApi.reducer,
    skiPasses: transfersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(accommodationsApi.middleware)
      .concat(skiPassesApi.middleware)
      .concat(transfersApi.middleware),
});

setupListeners(store.dispatch);

export * from "./slices/accommodations";
export * from "./slices/transfers";
export * from "./slices/skiGears";
export * from "./slices/skiPasses";

export default store;
