import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import WooFeatures from "../components/Features/WooFeatures"
import WPLatestPosts from "../components/Post/WPLatestPosts"

const Index = () => {
	return (
		<>
		<Seo title="Home" />
			<Layout>
				<BannerModule
					title="Welcome to Barcadia (WordPress)"
					subTitle="This is a modification of the original Barcadia theme adapted to use
						WordPress and WooCommerce as the headless sources."
				/>
				<BasicTextModule
					title="A super-fast theme that is easy to get started, using the power of
						GatsbyJS"
					content="Using modern CSS properties such as grid, this theme is optmised for
						speed and mobile devices. Giving users an excellent experience on
						any device. Future-proofing your product."
					link="/products"
					linkText="View Products"
				/>
				<PerksModule>
				<Perk
					title="The Title"
					content="The content"
				/>
				</PerksModule>
				<WooFeatures
					title="Featured Products from Barcadia."
					introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
				/>
				<WPLatestPosts
					title="The Latest from WordPress"
					introduction="This section displays the latest 3 posts from WordPress."
				/>
			</Layout>
		</>
	)
}

export default Index
