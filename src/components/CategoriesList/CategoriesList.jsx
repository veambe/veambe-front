import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../services/categoryService";

const CategoriesList = () => {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryData = await getCategoryById(id);
        setCategory(categoryData);
      } catch (error) {
        console.error("Error al cargar las categorías", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <p>Cargando categoría...</p>;
  if (!category) return <p>Categoría no encontrada</p>;

  return (
    <ul>
      <div>
        <li key={category.id}> </li>
        <div>{category.name}</div>
      </div>
    </ul>
  );
};

export default CategoriesList;
