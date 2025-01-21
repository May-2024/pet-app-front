// React Importaciones
import { useRoutes, BrowserRouter } from "react-router-dom";

// Contexts

/// Componentes y paginas

import { Navbar } from "./Components/Navbar/Navbar";
import { Homeless } from "./Pages/Homeless/Homeless";
import { Pets } from "./Pages/Pets/Pets";
import { Users } from "./Pages/Users/Users";

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <Homeless /> },
    { path: "/pets", element: <Pets /> },
    { path: "/users", element: <Users /> },
    
  ]);
  return routes
}
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
