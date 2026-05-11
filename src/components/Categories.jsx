import "./Categories.css";

import { FaLaptop, FaRegHeart, FaShoppingBag } from "react-icons/fa";

import { IoHomeOutline, IoShirtOutline } from "react-icons/io5";

const categoriesData = [
  {
    id: 1,
    title: "Fashion",
    items: "300+ items",
    icon: <IoShirtOutline />,
  },
  {
    id: 2,
    title: "Electronics",
    items: "120+ items",
    icon: <FaLaptop />,
  },
  {
    id: 3,
    title: "Home",
    items: "80+ items",
    icon: <IoHomeOutline />,
  },
  {
    id: 4,
    title: "Health",
    items: "200+ items",
    icon: <FaRegHeart />,
  },
  {
    id: 5,
    title: "Bags",
    items: "90+ items",
    icon: <FaShoppingBag />,
  },
];

const Categories = () => {
  return (
    <section className="sections categories">
      <div className="section-heading">
        <h1>Categories</h1>

        <a href="#">
          View All
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      <div className="card-cont">
        {categoriesData.map((category) => (
          <div className="card" key={category.id}>
            <div className="card-img">{category.icon}</div>

            <h3 className="card-title">{category.title}</h3>

            <p className="quantity">{category.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
