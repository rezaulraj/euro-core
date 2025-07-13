import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import EmployeePage from "./pages/foremployee/EmployeePage";
import AboutPage from "./pages/about/AboutPage";
import CandidatePage from "./pages/candidate/CandidatePage";
import JoinUsPage from "./pages/joinus/JoinUsPage";
import ServicePage from "./pages/service/ServicePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="for-employers" element={<EmployeePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="for-candidates" element={<CandidatePage />} />
          <Route path="join-us" element={<JoinUsPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
