import { useLocation } from "react-router-dom";
import MenuItemWrapper from "./components/containers/MenuItemWrapper";

function App() {
  const location = useLocation();

  return (
    <div>
      <MenuItemWrapper path={location.pathname} />
    </div>
  );
}

export default App;
