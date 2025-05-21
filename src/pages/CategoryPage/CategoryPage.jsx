import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryPage.css"

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
    <section>
      <h1 className="category-page-title">
        {decodeURIComponent(categoryName)}
      </h1>
      {artworks.length === 0 ? (
        <p>No hay obras en esta categoría.</p>
      ) : (
        <ul className="category-page-list">
          {artworks.map((art) => (
            <li key={art.id}>
              <Link
                to={`/trabajo/obra/${encodeURIComponent(art.id)}`}
                className="category-page-artwork"
              >
                <h3 className="artwork-title">{art.title}</h3>

                {art.filePath ? (
                  <img
                    src={`http://localhost:8080/${art.filePath.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={art.title}
                    style={{ width: "500px", height: "auto" }}
                  />
                ) : (
                  <p>No hay imagen disponible</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CategoryDetail;
