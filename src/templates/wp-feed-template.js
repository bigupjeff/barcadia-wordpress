import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import ProductFeed from "../components/Feeds/WooProductFeed"
import PostFeed from "../components/Feeds/WPPostFeed"

const getTemplate = (wpPage) => {
	const { templateName } = wpPage.template.templateName
	switch (templateName) {
		case "Products":
			return <ProductFeed {...wpPage} />

		default:
			return <PostFeed {...wpPage} />
	}
}

/**
 * Feed Page Component
 * 
 * The data from the page query is passed to the component as data.wpPage. We're destructuring the
 * data object, then using it in our markup.
 *
 */

const FeedTemplate = (wpPage) => {
const { title, content, featuredImage } = wpPage
const headerImage = (featuredImage) ? getImage(featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null
const altText = (featuredImage) ? featuredImage.node.altText : null
	return (
		<>
			<Seo title={title} />
			<Layout>
				<SimpleBanner
					title={title}
					content={content}
				>
				{headerImage &&
					<GatsbyImage
						className="banner__image"
						image={headerImage}
						alt={altText}
					/>
				}
				</SimpleBanner>
				<div className="section">
					<div className="feed">
						{getTemplate(wpPage)}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default FeedTemplate