import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "../../templates/wp-post-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Post = ({ data: { wpPost } }) => {
  return (
    <>
      <Seo title={wpPost.title} />
      <Layout>
        <PostTemplate {...wpPost} />
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
export default Post