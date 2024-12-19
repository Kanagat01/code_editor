import { withProviders } from "./providers";
import { Routing } from "~/pages";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
