import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"
import WPLatestPosts from "../components/Post/WPLatestPosts"

const Index = () => {
	return (
		<>
		<Seo title="Home" />
			<Layout>
				<BannerModule
					title="Welcome to Barcadia (WordPress)"
					subTitle="This is a modification of the original Barcadia theme adapted to use WordPress
						as the primary source."
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
				<Features
					title="Featured Products from Barcadia."
					introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
				/>
				<LatestPosts
					title="The Latest from Barcadia"
					introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
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
