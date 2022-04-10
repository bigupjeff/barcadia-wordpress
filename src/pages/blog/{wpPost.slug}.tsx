import React from "react"
import { graphql } from "gatsby"
import WpPostTemplate from "../../templates/WpPostTemplate"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

interface WpPostProps {
	data: object
}

const WpPost = ({ data: { wpPost } }: WpPostProps) => {
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
