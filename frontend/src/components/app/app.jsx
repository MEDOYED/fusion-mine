import { Outlet } from "react-router";

import NavMenu from "../widgets/nav-menu/nav-menu";

import "./app.css";

function App() {
  return (
    <div className="container">
      <NavMenu />
      <Outlet />
    </div>
  );
}

export default App;
