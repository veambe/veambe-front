import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UploadPage from "./pages/UploadPage/UploadPAge";
import ArtworkPage from "./pages/ArtworkPage/ArtworkPAge";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ContactForm from "./components/ContactForm/ContactForm";
import ArtworkListPage from "./components/ArtworkList/ArtworkList";
import ArtworkUpdateForm from "./components/UpdateForm/UpdateForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/trabajo/categoria/:categoryName"
          element={<CategoryPage />}
        />
        <Route path="/trabajo/obra/:artworkId" element={<ArtworkPage />} />
        <Route path="/sobre-mi" element={<AboutMePage />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/admin/upload" element={<UploadPage />} />
        <Route path="/admin/dashboard" element={<ArtworkListPage />} />
        <Route path="/admin/edit/:artworkId" element={<ArtworkUpdateForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
