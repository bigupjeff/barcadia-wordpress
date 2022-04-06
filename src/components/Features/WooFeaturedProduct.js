import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"

const FeaturedProduct = ({ feature }) => {
	const { slug, headerImage, title, short_description } = feature
	const gatsbyPath = `/woo-products/` + slug
	const image = (headerImage) ? getImage(headerImage[0].localFile.childImageSharp) : null
	const altText = (headerImage) ? headerImage[0].alt : null
	return (
		<FeaturedProductStyles>
			<Link to={gatsbyPath}>
				<GatsbyImage
					className="features__item--img"
					image={image}
					alt={altText}
				/>
				{title && short_description && (
					<div className="features__item--content">
						{title && <h4>{title}</h4>}
						{short_description &&
							<div
								dangerouslySetInnerHTML={{ __html: short_description }}
							/>
						}
						<Button text="Read More" as="span" arrow={true} />
					</div>
				)}
			</Link>
		</FeaturedProductStyles>
	)
}

export default FeaturedProduct
