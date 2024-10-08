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
            totalRevenue: totalRevenue.toFixed(2),
            totalSold,
            averageQuantity: averageQuantity.toFixed(2),
            averageSales: averageSales.toFixed(2),
           
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
