import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import WooFeaturedProduct from "./WooFeaturedProduct"
import useWooFeaturedProducts from "../../hooks/useWooFeaturedProducts"
import Button from "../Button/Button"
import PropTypes from "prop-types"

const WooFeaturedProducts = ({ title, introduction }) => {
	const featuredProduct = useWooFeaturedProducts()

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

WooFeaturedProducts.propTypes = {
	title: PropTypes.string,
	introduction: PropTypes.string,
}

export default WooFeaturedProducts
