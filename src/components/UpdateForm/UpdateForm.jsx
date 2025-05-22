import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArtworkById, updateArtwork } from "../../services/artworkService";
import { uploadImageFile } from "../../services/imageService";
import "./UpdateForm.css";

const ArtworkUpdateForm = () => {
  const { artworkId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);
  const [categories] = useState([
    { id: 1, name: "Murales" },
    { id: 2, name: "Cerámica" },
    { id: 3, name: "Grabado" },
    { id: 4, name: "Ilustración Publicitaria" },
    { id: 5, name: "Textil" },
    { id: 6, name: "Autoedición" },
    { id: 7, name: "Obra personal" },
  ]);

  useEffect(() => {
    const fetchArtwork = async () => {
      const data = await getArtworkById(artworkId);
      setTitle(data.title);
      setDescription(data.description);
      setCategoryId(data.category.id);
    };
    fetchArtwork();
  }, [artworkId]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      alert("Máximo 10 imágenes");
    } else {
      setImages(files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateArtwork(artworkId, {
        title,
        description,
        category: { id: parseInt(categoryId) },
      });

      for (const image of images) {
        const formData = new FormData();
        formData.append("file", image);
        await uploadImageFile(artworkId, formData);
      }

      alert("Obra actualizada con éxito");
      navigate("/artworks");
    } catch (err) {
      console.error("Error al actualizar la obra:", err);
      alert("Error al actualizar la obra");
    }
  };

  return (
    <div>
        <h2 className="update-page-title">Editar Obra</h2>
      <form className="update-form" onSubmit={handleSubmit}>

        <label className="update-label-container">Título:</label>
        <input
          className="update-form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="update-label-container">Descripción:</label>
        <textarea
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="update-label-container">Categoría:</label>
        <select
          className="update-form-input"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <label className="update-label-container">
          Imágenes nuevas (máx 10):
        </label>
        <input
          className="update-form-input"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="button-container">
          <button className="update-form-button" type="submit">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArtworkUpdateForm;
