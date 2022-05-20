import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import WooBannerModule from "../components/BannerModule/WooBannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import WooFeaturedProducts from "../components/Features/WooFeaturedProducts"
import WpLatestPosts from "../components/Post/WpLatestPosts"

const Index = () => {
	return (
		<>
			<Seo title="Home" />
			<Layout>
				<WooBannerModule
					title="Welcome to Barcadia-WP"
					subTitle="This is a modification of the original Barcadia theme adapted to use
                        WordPress and WooCommerce as a headless source."
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
					<Perk title="The Title" content="The content" />
				</PerksModule>
				<WooFeaturedProducts
					title="Featured Products."
					introduction='Here&apos;s a selection of sizzling products which appear here because
                        they are assigned to the "Featured" category in
                        WooCommerce&#47;WordPress.'
				/>
				<WpLatestPosts
					title="The Latest Blog Posts"
					introduction="Here are the latest 3 awesome posts from WordPress."
				/>
			</Layout>
		</>
	)
}

export default Index
