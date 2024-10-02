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
      <div className={styles["product-view"]}>
        hi im product view window
      </div>

      <div className={styles["table-wrapper"]}>
        <table className={styles['records-table']}>
          <caption className={styles['table-caption']}>
            Product Sales Records
          </caption>

          {/* Table headings */}
          <thead>
            <tr>
              <th>Sale Id</th>
              <th>Sale Date</th>
              <th>Sale Quantity</th>
              <th>Sale Price</th>
            </tr>
          </thead>

          {/* Table data */}
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">Fetching data...</td> {/* Show "Fetching data" when loading */}
              </tr>
            ) : saleRecords.length === 0 ? (
              <tr>
                <td colSpan="4">No records found</td> {/* Show "No records found" when there are no records */}
              </tr>
            ) : (
              saleRecords.map((saleRecord) => (
                <tr key={saleRecord.id}>
                  <td data-cell="SaleId">{saleRecord.saleId}</td>
                  <td data-cell="SaleDate">{new Date(saleRecord.saleDate).toLocaleDateString()}</td>
                  <td data-cell="SaleQuantity">{saleRecord.saleQty}</td>
                  <td data-cell="SalePrice">R {saleRecord.salePrice}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <NavLink 
      to='/'
      className={styles['back-to-home-button']}>
        <Home />
      </NavLink>
    </div>
  );
}

export default Salehistory;
