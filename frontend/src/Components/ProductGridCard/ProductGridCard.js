import React from 'react'
import styles from './ProductGridCard.module.css'
import { NavLink } from 'react-router-dom'

function ProductGridCard({ id = 1, description, salePrice, category, image }) {
	return (
		<div key={id} className={styles['product-grid-card']}>
			<img src={image} alt="" className={styles['product-grid-card-image']} />
			<p className={styles['product-grid-card-name']}>{description}</p>
			<p className={styles['product-grid-card-category']}>{category}</p>
			<p className={styles['product-grid-card-sale-price']}>R{salePrice}</p>
			<NavLink
				to={`/products/${id}`}
				className={`${styles['product-grid-card-button']} button`}
			>
				<span className={`${styles['product-grid-card-button-text']}`}>Sale History</span>

			</NavLink>
		</div>
	)
}

export default ProductGridCard