import { Provider } from "react-redux";
import SkiOffer from "./screens/SkiOffer";
import store from "./store/store";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <SkiOffer />
      </Provider>
    </LocalizationProvider>
  );
};

export default App;
