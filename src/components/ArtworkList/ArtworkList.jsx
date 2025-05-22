import { useEffect, useState } from "react";
import {
  getAllArtworks,
  deleteArtworkById,
} from "../../services/artworkService";
import "./ArtworkList.css"
import { Link } from "react-router-dom";


const ArtworkListPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArtworks = async () => {
    try {
      const data = await getAllArtworks();
      setArtworks(data);
    } catch (error) {
      console.error("Error al cargar las obras:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  const handleDelete = async (artworkId) => {
    if (!window.confirm("Estás segura que quieres borrar este elemento?"))
      return;

    try {
      await deleteArtworkById(artworkId);
      setArtworks((prev) => prev.filter((art) => art.id !== artworkId));
    } catch (error) {
      alert("Error al borrar el elemento:", error);
    }
  };

  if (loading) return <p>Loading artworks...</p>;

  return (
    <div>
      <h2 className="artwork-list-title">Gestiona tus obras</h2>
      {artworks.length === 0 ? (
        <p>No artworks available.</p>
      ) : (
        <ul className="artworklist-container">
          {artworks.map((art) => (
            <li className="artwork-list" key={art.id}>
              &#x2022;{art.title}{" "}
              <button
                onClick={() => handleDelete(art.id)}
                className="delete-button"
              >
                Borrar
              </button>
              <Link to={`/admin/edit/${art.id}`}>
                <button className="edit-button">Editar</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArtworkListPage;
