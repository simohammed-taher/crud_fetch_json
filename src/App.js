import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate";
import EmpDetail from "./components/EmpDetail";
import EmpEdit from "./components/EmpEdit";

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-5">React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
