import React from "react"
import WooFeaturedProduct from "../Features/WooFeaturedProduct"
import useWooAllProducts from "../../hooks/useWooAllProducts"

const WooProductFeed = () => {
	const allProduct = useWooAllProducts()

	return allProduct.map((node, index) => {
		return <WooFeaturedProduct key={index} feature={node} />
	})
}

export default WooProductFeed
