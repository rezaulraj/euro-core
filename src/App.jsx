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
import PartnerPage from "./pages/partner/PartnerPage";
import TermsConditionPage from "./pages/tramandcondition/TermsConditionPage";
import BlogPage from "./pages/blog/BlogPage";
import Candidate from "./pages/candiaete/Candidate";
import BlogDetails from "./pages/blog/BlogDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="for-employers" element={<EmployeePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="what-we-offer" element={<CandidatePage />} />
          <Route path="partnership" element={<PartnerPage />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="career" element={<JoinUsPage />} />
          <Route path="industries" element={<ServicePage />} />
          <Route path="terms-and-conditions" element={<TermsConditionPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/:slug" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
