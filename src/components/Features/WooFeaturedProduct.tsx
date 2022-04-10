import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"

interface WooFeaturedProductProps {
	feature?: object
}

const WooFeaturedProduct = ({ feature }: WooFeaturedProductProps) => {
	const { slug, headerImage, name, short_description } = feature
	const gatsbyPath = `/products/` + slug
	const image = headerImage
		? getImage(headerImage[0].localFile.childImageSharp)
		: null
	const altText = headerImage ? headerImage[0].alt : ""
	return (
		<FeaturedProductStyles>
			<Link to={gatsbyPath}>
				<GatsbyImage
					className="features__item--img"
					image={image}
					alt={altText}
				/>
				{name && short_description && (
					<div className="features__item--content">
						{name && <h4>{name}</h4>}
						{short_description && (
							<div
								dangerouslySetInnerHTML={{
									__html: short_description,
								}}
							/>
						)}
						<Button text="Read More" as="span" arrow={true} />
					</div>
				)}
			</Link>
		</FeaturedProductStyles>
	)
}

export default WooFeaturedProduct
