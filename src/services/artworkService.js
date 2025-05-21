// src/services/artworkService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/trabajo";

// Admin ID fijo mientras no hay autenticación
const ADMIN_ID = 1;

// Crear una nueva obra (artwork)
export const createArtwork = async (artwork) => {
  try {
    const response = await axios.post(`${BASE_URL}/${ADMIN_ID}`, artwork);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating artwork:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Obtener todas las obras
export const getAllArtworks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching artworks:", error);
    throw error;
  }
};

// Obtener obra por ID
export const getArtworkById = async (artworkId) => {
  try {
    const response = await axios.get(`${BASE_URL}/obra/${artworkId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching artwork by ID:", error);
    throw error;
  }
};

// Obtener obras por categoría
export const getArtworksByCategory = async (categoryName) => {
  try {
    const response = await axios.get(`${BASE_URL}/categoria/${categoryName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching artworks by category:", error);
    throw error;
  }
};
