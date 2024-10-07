import React, { useEffect, useState, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Products.module.css";
import ProductGridCard from "../../Components/ProductGridCard/ProductGridCard";
import SkeletonGridCard from "../../Components/SkeletonGridCard/SkeletonGridCard";
import { GetProducts } from "../../utils/Api/ProductsApi";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [skeletonCount] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchInput, activeFilter, setCategoryCounts } = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const productData = await GetProducts();
      if (productData) {
        setProducts(productData.data);
        setFilteredProducts(productData.data);

        // Calculate category counts and update them
        const allCount = productData.data.length;
        const fruitCount = productData.data.filter(
          (item) => item.category.toLowerCase() === "fruit"
        ).length;
        const vegetableCount = productData.data.filter(
          (item) => item.category.toLowerCase() === "vegetable"
        ).length;

        setCategoryCounts({
          all: allCount,
          fruit: fruitCount,
          veg: vegetableCount,
        });
      }
      setLoading(false);
    };
    fetchData();
  }, [setCategoryCounts]);

  const filterProducts = useCallback((search, filter) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((item) =>
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter !== "All") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === filter.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [products]);

  useEffect(() => {
    filterProducts(searchInput, activeFilter);
  }, [searchInput, activeFilter, filterProducts]);

  return (
    <div className={`${styles["products-container"]}`}>
      {loading
        ? Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonGridCard key={index} />
          ))
        : filteredProducts.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
    </div>
  );
}

export default Products;
