import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import WooFeaturedProduct from "./WooFeaturedProduct"
import useFeaturedWooProduct from "../../hooks/use-featured-woo-product"
import Button from "../Button/Button"

const Features = ({ title, introduction }) => {
	const featuredProduct = useFeaturedWooProduct()

	return (
		<FeaturedProductsStyles className="section">
			{title || introduction ? (
				<div className="container container__tight">
					<div className="intro__area">
						{title && <h2>{title}</h2>}
						{introduction && <p>{introduction}</p>}
					</div>
				</div>
			) : null}
			<div className="container container__tight container__scroll">
				{featuredProduct.map((node, index) => {
					return <WooFeaturedProduct feature={node} key={index} />
				})}
			</div>
			<div className="container container__tight learn__more">
				<Button as={Link} to="/products" text="All Products" />
			</div>
		</FeaturedProductsStyles>
	)
}

export default Features
