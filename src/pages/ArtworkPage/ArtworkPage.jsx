import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArtworkPage.css"

const ArtworkPage = () => {
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworkAndImages = async () => {
      try {
        const artResponse = await axios.get(
          `http://localhost:8080/api/v1/trabajo/obra/${artworkId}`
        );
        setArtwork(artResponse.data);

        const imgResponse = await axios.get(
          `http://localhost:8080/api/v1/images/obra/${artworkId}`
        );
        setImages(imgResponse.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworkAndImages();
  }, [artworkId]);

  if (loading) return <p>Cargando detalles de la obra...</p>;
  if (!artwork) return <p>No se encontró la obra.</p>;

  return (
    <section>
      <h2 className="artwork-page-title">{artwork.title}</h2>
      <p className="artwork-page-description">{artwork.description}</p>
      <div className="image-container">
        {images.length > 0 ? (
          <ul className="artwork-image-list">
            {images.map((img, index) => (
              <li key={index}>
                <img
                  src={`http://localhost:8080/${img.filePath.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={`Imagen ${index + 1}`}
                  style={{ width: "500px", height: "auto" }}
                  className="artwork-image"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay imágenes disponibles para esta obra.</p>
        )}
      </div>
    </section>
  );
};

export default ArtworkPage;
