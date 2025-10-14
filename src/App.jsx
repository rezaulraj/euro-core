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
import ScrollToTop from "./components/ScrollToTop";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import GalleryPage from "./pages/gallery/GalleryPage";
function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="employers" element={<EmployeePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="what-we-offer" element={<CandidatePage />} />
          <Route path="partnership" element={<PartnerPage />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="gallerys" element={<GalleryPage />} />
          <Route path="career" element={<JoinUsPage />} />
          <Route path="industries" element={<ServicePage />} />
          <Route path="terms-and-conditions" element={<TermsConditionPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/:slug" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <div className="relative">
        <span className="fixed bottom-5 right-4 cursor-pointer">
          <FaArrowUpFromBracket
            onClick={handleScrollToTop}
            className="text-4xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors animate-pulse"
          />
        </span>
      </div>
    </>
  );
}

export default App;
