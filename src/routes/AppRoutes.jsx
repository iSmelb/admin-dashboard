import { Routes, Route } from "react-router-dom";
import Bar from "../scenes/bar";
import Calendar from "../scenes/calendar";
import Contacts from "../scenes/contacts";
import Dashboard from "../scenes/dashboard";
import FAQ from "../scenes/faq";
import Form from "../scenes/form";
import Invoices from "../scenes/invoices";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
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
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/bar" element={<Bar/>}/>
      <Route path="/pie" element={<Pie/>}/>
      <Route path="/line" element={<Line/>}/>
    </Routes>
  )
}

export default AppRoutes