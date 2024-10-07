// AnalyticsOverview.js

import React, { useMemo } from 'react';
import styles from './AnalyticsOverview.module.css';
import { AutoGraph, Insights, ShowChart, Timeline } from '@mui/icons-material';

function AnalyticsOverview({ overview }) {
  const {
    totalRevenue = 0,
    totalSold = 0,
    averageQuantity = 0,
    averageSales = 0,
  } = overview || {};

  return (
    <div className={styles['analytics-overview-skeleton-container']}>
      <div className={styles["analitic-overview-card"]}>
        <ShowChart className={styles['overview-icon']} />
        <span className={styles['overview-value']}>{totalRevenue}</span>
        <span className={styles['overview-name']}>Total Revenue made</span>
      </div>

      <div className={styles["analitic-overview-card"]}>
        <Timeline className={styles['overview-icon']} />
        <span className={styles['overview-value']}>{totalSold}</span>
        <span className={styles['overview-name']}>Total Quantity Sold</span>
      </div>

      <div className={styles["analitic-overview-card"]}>
        <AutoGraph className={styles['overview-icon']} />
        <span className={styles['overview-value']}>{averageQuantity}</span>
        <span className={styles['overview-name']}>Average Quantity Sold</span>
      </div>

      <div className={styles["analitic-overview-card"]}>
        <Insights className={styles['overview-icon']} />
        <span className={styles['overview-value']}>{averageSales}</span>
        <span className={styles['overview-name']}>Average Sale Price</span>
      </div>
    </div>
  );
}

export default AnalyticsOverview;
