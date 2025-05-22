import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryService";
import { Link } from "react-router-dom";
import "./CategoriesList.css";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const normalizeName = (name) => {
    return name
      .toLowerCase()
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/\s+/g, ""); 
  };


  const categoryImages = {
    murales: "https://i.ibb.co/fHg39hF/img-seccion-mural.png",
    autoedicion: "https://i.ibb.co/PhNvcw1/img-seccion-autoedicion.png",
    ceramica: "https://i.ibb.co/55Wwvry/img-seccion-ceramica.png",
    grabado: "https://i.ibb.co/RCf4GT6/img-seccion-grabado.png",
    ilustracionpublicitaria:
      "https://i.ibb.co/k8BxWdT/img-seccion-ilu-publi.png",
    obrapersonal: "https://i.ibb.co/dkwpjMJ/img-seccion-obra-personal.png",
    productosilustrados:
      "https://i.ibb.co/PxYtgWh/img-seccion-productos-ilustrados.png",
    textil: "https://i.ibb.co/mD7yNWR/img-seccion-textil.png",
  };

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
            <img
              src={
                categoryImages[normalizeName(category.name)] ||
                "https://via.placeholder.com/800"
              }
              width={800}
              alt={category.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
