import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/images";

export const uploadImageJson = async (artworkId, imageData) => {
  try {
    const response = await axios.post(`${BASE_URL}/${artworkId}`, imageData);
    return response.data;
  } catch (error) {
    console.error("Error uploading image (JSON):", error);
    throw error;
  }
};

export const getImagesByArtwork = async (artworkId) => {
  try {
    const response = await axios.get(`${BASE_URL}/obra/${artworkId}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching images by artwork ID:", error);
    throw error;
  }
};

export const uploadImageFile = async (artworkId, file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      `/api/v1/images/upload/${artworkId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading image file:", error);
    throw error;
  }
};
