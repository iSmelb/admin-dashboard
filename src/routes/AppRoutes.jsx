import { Routes, Route } from "react-router-dom";
import Calendar from "../scenes/calendar";
import Contacts from "../scenes/contacts";
import Dashboard from "../scenes/dashboard";
import Form from "../scenes/form";
import Invoices from "../scenes/invoices";
import Team from "../scenes/team";

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/invoices" element={<Invoices/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
    </Routes>
  )
}

export default AppRoutes