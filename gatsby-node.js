
/**
 *This createPages function is part of the tutorial at the following URL.
 * 
 *@link https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/querying-data.md
 *
 */

exports.createPages = async ({ actions, graphql, reporter }) => {

	/**
	 * Fetch WordPress post GraphQL data.
	 */
	const result = await graphql(`
	{
		allWpPost {
			nodes {
				id
				uri
			}
		}
	}
	`)

	/**
	 * Catch data errors
	 */
	if (result.errors) {
		reporter.error("There was an error fetching posts", result.errors)
	}

	/**
	 * The results of a GraphQL query come back under the "data" key, so the next line gets the
	 * posts out of the data.
	 */
	const { allWpPost } = result.data
	
	/**
	 * Define the template to use
	 */

	const template = require.resolve(`./src/templates/WpPostTutorial.js`)
	
	/**
	 * Iterate over all the posts that were returned from our GraphQL Query, and use the createPage
	 * function to create pages
	 * 
	 * The createPage function needs the following information:
	 *  - path: The path that the page will live at, relative to the domain. (ex: /your-page/).
	 *  - component: The component that will be used to build the page.
	 *  - context: The contextual data that is passed to the component that's used to build the page.
	 */
	if (allWpPost.nodes.length) {
	allWpPost.nodes.map(post => {
			actions.createPage({
				// It's best practice to use the uri field from WPGraphQL nodes when building.
				path: `gatsby-create-pages${post.uri}`,
				component: template,
				context: post,
			})
		})
	}
}