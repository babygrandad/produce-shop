import React from 'react'
import styles from './AnalyticsOverview.module.css'
import { AutoGraph, Insights, ShowChart, Timeline,  } from '@mui/icons-material'

function AnalyticsOverview() {
	return (
		<div className={styles['analytics-overview-skeleton-container']}>
			<div className={styles["analitic-overview-card"]}>
				<ShowChart className={styles['overview-icon']} />
				<span className={styles['overview-value']}>25.2k</span>
				<span className={styles['overview-name']}>Total Revenue made</span>
			</div>

			<div className={styles["analitic-overview-card"]}>
				<Timeline className={styles['overview-icon']} />
				<span className={styles['overview-value']}>25.2k</span>
				<span className={styles['overview-name']}>Total Quantity Sold</span>
			</div>

			<div className={styles["analitic-overview-card"]}>
				<AutoGraph className={styles['overview-icon']} />
				<span className={styles['overview-value']}>25.2k</span>
				<span className={styles['overview-name']}>Avarage Quantity sold</span>
			</div>

			<div className={styles["analitic-overview-card"]}>
				<Insights className={styles['overview-icon']} />
				<span className={styles['overview-value']}>25.2k</span>
				<span className={styles['overview-name']}>Avarage Sale Price</span>
			</div>

			

{/**
 * Total Revenue made
 * Total Quantity Sold
 * Avarage Quantity sold
 * Avarage Sale Price
 */}

		</div>
	)
}

export default AnalyticsOverview