import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import StudyInJapan from "@/pages/StudyInJapan";
import SuccessStories from "@/pages/SuccessStories";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/study-in-japan" element={<StudyInJapan />} />
      <Route path="/success-stories" element={<SuccessStories />} />
    </Routes>
  );
}
