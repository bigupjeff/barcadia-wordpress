import React from "react"
import { graphql } from "gatsby"
import WpPostTemplate from "../../templates/wp-post-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const WpPost = ({ data: { wpPost } }) => {
	return (
		<>
			<Seo title={wpPost.title} />
			<Layout>
				<WpPostTemplate {...wpPost} />
			</Layout>
		</>
	)
}

export const data = graphql`
	query wpPostQuery($id: String) {
		wpPost(id: { eq: $id }) {
			title
			excerpt
			content
			date(formatString: "DD MMMM, YYYY")
		}
	}
`
export default WpPost
