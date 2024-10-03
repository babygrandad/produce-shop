import React from 'react'
import styles from './ProductGridCard.module.css'
import { NavLink } from 'react-router-dom'

function ProductGridCard({ id = 1, description, salePrice, category, image }) {
	return (
		<div key={id} className={styles['product-grid-card']}>
			
		</div>
	)
}

export default ProductGridCard