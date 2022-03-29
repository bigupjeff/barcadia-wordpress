/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: "Barcadia",
		description: "A super-fast site using GatsbyJS",
		author: "Morgan Baker",
		twitterUsername: "barcadia",
		facebookUsername: "barcadia",
		instagramUsername: "barcadia",
		linkedinUsername: "barcadia",
		image: "/macbook-color.jpg",
		siteUrl: "https://barcadia.netlify.com",
		developerName: "Morgan Baker Development",
		developerUrl: "https://www.morganbaker.dev",
	},
	/* Your site config here */
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `logos`,
				path: `${__dirname}/static/logos/`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: "https://wp-source.bigupweb.uk/graphql",
				auth: {
					htaccess: {
						username: process.env.HTTPBASICAUTH_USERNAME,
						password: process.env.HTTPBASICAUTH_PASSWORD,
					}
				},
				verbose: true,
				searchAndReplace: [
					{
						// Regex rule used to search when replacing strings in node data
						search: "https://wp-source.bigupweb.uk",
						// Replacement string to use in place of the search string.
						replace: "https://bigupweb.uk",
					},
				],
				html: {
					// Causes the source plugin to find/replace images in html with Gatsby images.
					useGatsbyImage: true,
					// Determines the image quality that Sharp will use when generating inline html
					// image thumbnails.
					imageQuality: 90,
					// When this is true, any url's which are wrapped in "", '', or () and which
					// contain /wp-content/uploads will be transformed into static files and the
					// url's will be rewritten. 
					createStaticFiles: true,
					// When this is true, .webp images will be generated for images in html fields
					// in addition to the images gatsby-image normally generates.
					generateWebpImages: true,
					// This can be either "blurred" or "dominantColor". This is the type of
					// placeholder image to be used in Gatsby Images in HTML fields.
					placeholderType: "blurred",
				},
				debug: {
					graphql: {
					  writeQueriesToDisk: true,
					  showQueryOnError: true,
					},
				},
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://barcadia.netlify.com",
				sitemap: "https://barcadia.netlify.com/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		`gatsby-transformer-sharp`,  // Needed for dynamic images
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-image`,
	],
}
