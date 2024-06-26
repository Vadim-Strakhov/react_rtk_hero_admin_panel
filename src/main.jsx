import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { Provider } from "react-redux";
import store from "./store";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
