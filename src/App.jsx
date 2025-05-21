import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UploadPage from "./pages/UploadPage/UploadPAge";
import ArtworkPage from "./pages/ArtworkPage/ArtworkPAge";

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
        <Route path="/subir" element={<UploadPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
