import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworksAndImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/trabajo/categoria/${encodeURIComponent(
            categoryName
          )}`
        );

        const artworksWithImages = await Promise.all(
          response.data.map(async (art) => {
            try {
              const imageRes = await axios.get(
                `http://localhost:8080/api/v1/images/obra/${art.id}`
              );
              // añade la primera imagen que encuentre
              return {
                ...art,
                filePath: imageRes.data[0]?.filePath || null,
              };
            } catch (imgErr) {
              console.error(
                `Error fetching image for artwork ${art.id}:`,
                imgErr
              );
              return {
                ...art,
                filePath: null,
              };
            }
          })
        );

        setArtworks(artworksWithImages);
      } catch (error) {
        console.error("Error fetching artworks by category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworksAndImages();
  }, [categoryName]);

  if (loading) return <p>Cargando obras de la categoría...</p>;

  return (
    <div>
      <h2>{decodeURIComponent(categoryName)}</h2>
      {artworks.length === 0 ? (
        <p>No hay obras en esta categoría.</p>
      ) : (
        <ul>
          {artworks.map((art) => (
            <li key={art.id}>
              <h3>{art.title}</h3>

              {art.filePath ? (
                <img
                  src={`http://localhost:8080/${art.filePath.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={art.title}
                  style={{ width: "200px", height: "auto" }}
                />
              ) : (
                <p>No image available</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDetail;
