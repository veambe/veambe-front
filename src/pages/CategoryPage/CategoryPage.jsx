import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [artworks, setArtworks] = useState([]);
  const [artworkImage, setArtworkImage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/trabajo/categoria/${encodeURIComponent(
            categoryName
          )}`
        );
        setArtworks(response.data);
        setArtworkImage(response.data)
      } catch (error) {
        console.error("Error fetching artworks by category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
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
              {art.title}
              <p> {art.description} </p>
              <img src={artworkImage.image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDetail;
