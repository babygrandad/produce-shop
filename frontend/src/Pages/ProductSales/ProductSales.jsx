// ProductSales.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductSales.module.css';
import { GetRecords } from '../../utils/Api/SaleHistoryApi';
import { GetProducts } from '../../utils/Api/ProductsApi';
import ProductBannerSkeleton from '../../Components/ProductBannerSkeleton/ProductBannerSkeleton';
import AnalyticsOverview from '../../Components/AnalyticsComponents/AnalyticsOverview/AnalyticsOverview';
import AnalyticsChart from '../../Components/AnalyticsComponents/AnalyticsChart/AnalyticsChart';
import AnalyticsTable from '../../Components/AnalyticsComponents/AnalyticsTable/AnalyticsTable';
import ProductBanner from '../../Components/ProductBanner/ProductBanner';

function ProductSales() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [saleRecords, setSaleRecords] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [overview, setOverview] = useState({
    totalRevenue: 0,
    totalSold: 0,
    averageQuantity: 0,
    averageSales: 0,
  });

  useEffect(() => {
    const fetchProductAndRecords = async () => {
      setLoading(true);
      try {
        const products = await GetProducts();
        const foundProduct = products.data.find((item) => item.id == id);
        setProduct(foundProduct);

        const record = await GetRecords(id);
        setSaleRecords(record.data);

        if (record.data.length > 0) {
          const totalSold = record.data.reduce(
            (sum, rec) => sum + rec.saleQty,
            0
          );
          const totalRevenue = record.data.reduce(
            (sum, rec) => sum + rec.salePrice * rec.saleQty,
            0
          );
          const averageQuantity = totalSold / record.data.length;
          const averageSales = totalRevenue / totalSold;

          setOverview({
            totalRevenue: formatNumber(totalRevenue), // Format total revenue
        		totalSold: formatNumber(totalSold),       // Format total sold
       			averageQuantity: formatNumber(averageQuantity, 1), // Format average quantity
        		averageSales: formatNumber(averageSales, 1), // Format average sales
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndRecords(id);
  }, [id]);

	const formatNumber = (num, decimals = 0) => {
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M'; // Format to millions with 2 decimal places
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(0) + 'K'; // Format to thousands without decimals
    }
    return num.toFixed(decimals); // Format with specified decimals for smaller numbers
};



  return (
    <div className={styles["sale-history-container"]}>
      {product ? (
        <ProductBanner product={product} />
      ) : (
        <ProductBannerSkeleton/>
      )}
      <AnalyticsOverview overview={overview} />
      <AnalyticsChart saleRecords={saleRecords} />
			<AnalyticsTable saleRecords={saleRecords} />
    </div>
  );
}

export default ProductSales;
