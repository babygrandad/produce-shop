import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './Salehistory.module.css';
import { GetRecords } from '../../utils/Api/SaleHistoryApi';
import { GetProducts } from '../../utils/Api/ProductsApi';
import { Home } from '@mui/icons-material';

function Salehistory() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [saleRecords, setSaleRecords] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProductAndRecords = async () => {
      setLoading(true);
      try {
        const products = await GetProducts();
        const foundProduct = products.data.find(item => item.id === id); // Compare with "=="
        setProduct(foundProduct);

        const record = await GetRecords(id);
        setSaleRecords(record.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchProductAndRecords(id);
  }, [id]);

  return (
    <div className={styles['sale-history-container']}>
      
    </div>
  );
}

export default Salehistory;
