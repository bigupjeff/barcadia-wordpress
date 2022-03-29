import React from "react"
import { graphql } from "gatsby"

/**
 *This page template function is part of the tutorial at the following URL.
 * 
 *@link https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/querying-data.md
 */


/**
 * When the page is created, the context that is passed (in our case the post node, with
 * the id and uri fields) is made available to the template. This context can be used as variables
 * within a page query to query a specific node and it's fields.
 * 
 * The data from the page query is passed to the component as data.wpPost. We're destructuring the
 * title, content and id from the response, then using it in our markup.
 */
const WpPost = ({
	data: {
		wpPost: { title, content, id },
	},
}) => {
	return (
	<div className={`post-${id}`}>
		<h1>{title}</h1>
		<div dangerouslySetInnerHTML={{ __html: content }} />
	</div>
	)
}

/**
 * This query is asking for the wpPost where the id is equal to the ID that was passed through in
 * context. And in response we're asking for the id, title and content of the Post.
 */
export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPost