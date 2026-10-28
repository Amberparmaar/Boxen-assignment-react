import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import DemosPage from "@/pages/DemosPage";
import Features from "@/sections/Features";
import Testimonials from "@/sections/Testimonials";
import NotFound from "@/pages/NotFound";
import Home4 from "@/pages/Home4";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="demos" element={<DemosPage />} />
        <Route path="features" element={<Features />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/home-4" element={<Home4 />} />
    </Routes>
  );
}
