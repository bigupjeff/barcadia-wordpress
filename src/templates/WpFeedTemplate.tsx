import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import WooProductFeed from "../components/Feeds/WooProductFeed"
import WpPostFeed from "../components/Feeds/WpPostFeed"

const getFeedTemplate = (wpPage) => {
	const templateName = wpPage.slug.includes(`products`) ? "products" : ""
	switch (templateName) {
		case "products":
			return <WooProductFeed {...wpPage} />

		default:
			return <WpPostFeed {...wpPage} />
	}
}

const FeedTemplate = (wpPage) => {
	const { title, content, featuredImage } = wpPage
	const headerImage = featuredImage
		? getImage(featuredImage.node.localFile.childImageSharp.gatsbyImageData)
		: null
	const altText = featuredImage ? featuredImage.node.altText : null
	return (
		<>
			<Seo title={title} />
			<Layout>
				<SimpleBanner title={title} content={content}>
					{headerImage && (
						<GatsbyImage
							className="banner__image"
							image={headerImage}
							alt={altText}
						/>
					)}
				</SimpleBanner>
				<div className="section">
					<div className="feed">{getFeedTemplate(wpPage)}</div>
				</div>
			</Layout>
			getTemplate
		</>
	)
}

export default FeedTemplate
