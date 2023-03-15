import { Routes, Route } from "react-router-dom";
import Dashboard from "../scenes/dashboard";

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
    </Routes>
  )
}

export default AppRoutes