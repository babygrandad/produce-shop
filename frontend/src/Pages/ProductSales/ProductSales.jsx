import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './ProductSales.module.css';
import { GetRecords } from '../../utils/Api/SaleHistoryApi';
import { GetProducts } from '../../utils/Api/ProductsApi';
import { Home } from '@mui/icons-material';

function ProductSales() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [saleRecords, setSaleRecords] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProductAndRecords = async () => {
			console.log("id :", id)
      setLoading(true);
      try {
        const products = await GetProducts();
        const foundProduct = products.data.find(item => item.id == id); // Compare with "=="
        setProduct(foundProduct);
				console.log("The One Product: ",product) // thats fine that works

        const record = await GetRecords(id);
        setSaleRecords(record.data);
				console.log("Sale Records :", record.data) // I'd like to think thats populating fine too

				
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndRecords(id);
  }, [id]);

  return (
    <div className={styles['sale-history-container']}>
      product sales
    </div>
  );
}

export default ProductSales;
