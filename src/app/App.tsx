import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmGrain } from "./components/FilmGrain";
import { CursorFollower } from "./components/CursorFollower";
import { HomePage } from "./components/HomePage";
import { CasePage } from "./components/CasePage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden" style={{ cursor: "none" }}>
        <style>{`
          ::-webkit-scrollbar { display: none; }
          * { scrollbar-width: none; cursor: none !important; }
          ::selection { background: #FF2D2D; color: #080808; }
        `}</style>
        <FilmGrain />
        <CursorFollower />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case/:caseId" element={<CasePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
