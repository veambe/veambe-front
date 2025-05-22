import { useEffect, useState } from "react";
import { getAllArtworks, deleteArtworkById } from "../../services/artworkService";

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
      <h2>All Artworks</h2>
      {artworks.length === 0 ? (
        <p>No artworks available.</p>
      ) : (
        <ul>
          {artworks.map((art) => (
            <li key={art.id}>
              {art.title}{" "}
              <button
                onClick={() => handleDelete(art.id)}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArtworkListPage;
