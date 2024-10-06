import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import ProductGridCard from "../../Components/ProductGridCard/ProductGridCard";
import SkeletonGridCard from "../../Components/SkeletonGridCard/SkeletonGridCard";
import { GetProducts } from "../../utils/Api/ProductsApi";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [skeletonCount] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [fruitCount, setFruitCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchInput, setSearchInput] = useState(""); // Add searchInput state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const productData = await GetProducts();

      if (productData) {
        setProducts(productData.data);
        setFilteredProducts(productData.data);
        setFruitCount(
          productData.data.filter((item) => item.category === "Fruit").length
        );
        setVegCount(
          productData.data.filter((item) => item.category === "Vegetable")
            .length
        );
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Function to handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    filterProducts(category, searchInput); // Pass searchInput here
  };

  // Function to handle search input
  const handleSearch = (input) => {
    setSearchInput(input); // Update searchInput state
    filterProducts(activeFilter, input);
  };

  // Function to filter products based on category and search input
  const filterProducts = (category, search) => {
    let filtered = products;
    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }
    if (search) {
      filtered = filtered.filter((item) =>
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className={`${styles["products-container"]}`}>
      {loading
        ? // Render skeleton loader while data is being fetched
          Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonGridCard key={index} />
          ))
        : // Render actual product data once it's loaded
          products.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
    </div>
  );
}

export default Products;
