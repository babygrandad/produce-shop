import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"; // Import this to use context
import styles from "./Products.module.css";
import ProductGridCard from "../../Components/ProductGridCard/ProductGridCard";
import SkeletonGridCard from "../../Components/SkeletonGridCard/SkeletonGridCard";
import { GetProducts } from "../../utils/Api/ProductsApi";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [skeletonCount] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchInput } = useOutletContext(); // Get the search input context

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const productData = await GetProducts();

      if (productData) {
        setProducts(productData.data);
        setFilteredProducts(productData.data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products when searchInput changes
    filterProducts(searchInput);
  }, [searchInput]);

  const filterProducts = (search) => {
    let filtered = products;
    if (search) {
      filtered = products.filter((item) =>
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
          filteredProducts.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
    </div>
  );
}

export default Products;
