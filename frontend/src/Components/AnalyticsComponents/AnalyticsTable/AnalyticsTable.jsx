import React from "react";
import styles from "./AnalyticsTable.module.css";
import DataTable from 'react-data-table-component';

function AnalyticsTable({ saleRecords }) {
  const columns = [
    { name: "Sale ID", selector: (row) => row.saleId, sortable: true },
    { name: "Product ID", selector: (row) => row.productId, sortable: true },
    { name: "Sale Price", selector: (row) => parseFloat(row.salePrice).toFixed(2), sortable: true },
    { name: "Sale Quantity", selector: (row) => row.saleQty, sortable: true },
    { name: "Sale Date", selector: (row) => row.saleDate, sortable: true },
  ];

  return (
    <div className={styles["analytics-table-container"]}>
      <DataTable
        title="Sales Data"
        columns={columns}
        data={saleRecords}
        pagination
      />
    </div>
  );
}

export default AnalyticsTable;
