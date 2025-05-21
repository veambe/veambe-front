import React, { useState } from "react";
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
      // Paso 1: Crear el objeto artwork completo
      const artworkPayload = {
        title,
        description,
        category: {
          id: parseInt(categoryId), // muy importante: debe ser número
        },
      };

      // Enviar al backend (usa ID de admin fijo = 1)
      const artworkResponse = await axios.post(
        "http://localhost:8080/api/v1/trabajo/1",
        artworkPayload
      );

      const artworkId = artworkResponse.data.id;

      // Paso 2: Subir imágenes
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
    <div>
      <h2>Subir nueva obra</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Categoría:</label>
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
          <label>Imágenes (máximo 10):</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button type="submit">Subir obra</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ArtworkUploadForm;
