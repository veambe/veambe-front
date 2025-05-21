import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryService";
import { Link } from "react-router-dom";
import "./CategoriesList.css"

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Cargando categorías...</p>;
  if (!categories.length) return <p>Categoría no encontrada</p>;

  return (
    <ul className="main-page-list">
      {categories.map((category) => (
        <li className="category-image" key={category.id}>
          <Link to={`/trabajo/categoria/${encodeURIComponent(category.name)}`}>
          
            <img src="https://i.ibb.co/fHg39hF/img-seccion-mural.png" width={800} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
