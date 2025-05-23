import "./UploadForm.css";

import { useState } from "react";
import axios from "axios";

const ArtworkUploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const categories = [
    { id: 1, name: "Murales" },
    { id: 2, name: "Cerámica" },
    { id: 3, name: "Grabado" },
    { id: 4, name: "Ilustración Publicitaria" },
    { id: 5, name: "Textil" },
    { id: 6, name: "Autoedición" },
    { id: 7, name: "Obra personal" },
    { id: 8, name: "Productos Ilustrados" },
  ];

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

    if (!categoryId) return alert("Por favor, selecciona una categoría");

    try {
      const artworkPayload = {
        title,
        description,
        category: {
          id: parseInt(categoryId), 
        },
      };

      const artworkResponse = await axios.post(
        "http://localhost:8080/api/v1/trabajo/1",
        artworkPayload
      );

      const artworkId = artworkResponse.data.id;

      for (const image of images) {
        const formData = new FormData();
        formData.append("file", image);

        await axios.post(
          `http://localhost:8080/api/v1/images/upload/${artworkId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      setMessage("Obra e imágenes subidas con éxito");
      setTitle("");
      setDescription("");
      setCategoryId("");
      setImages([]);
    } catch (err) {
      console.error("Error al subir la obra:", err);
      setMessage("Hubo un error al subir la obra.");
    }
  };

  return (
    <div className="upload-form-container">
      <form
        className="upload-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div>
          <label className="upload-label-container">Título:</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="upload-form-input"
          />
        </div>

        <div>
          <label className="upload-label-container">Descripción:</label>
          <textarea
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
          />
        </div>

        <div>
          <label className="upload-label-container">Categoría:</label>
          <select
            value={categoryId}
            required
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">-- Selecciona una categoría --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="upload-label-container">
            Imágenes (máximo 10):
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="upload-form-input"
          />
        </div>
        <div className="button-container">
          <button className="upload-form-button" type="submit">
            Subir obra
          </button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ArtworkUploadForm;
