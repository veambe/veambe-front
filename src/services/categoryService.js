import axios from "axios";

export const getCategoryById = async (categoryId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/categorias/${categoryId}`
    );
    console.log(response)
    return response.data.name;
  } catch (error) {
    console.error("Error al cargar las categorías", error);
    throw error;
  }
};
