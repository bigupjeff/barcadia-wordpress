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
		title: "Barcadia-WP",
		description: "A super-fast site using GatsbyJS",
		author: "Morgan Baker",
		twitterUsername: "barcadia-wp",
		facebookUsername: "barcadia-wp",
		instagramUsername: "barcadia-wp",
		linkedinUsername: "barcadia-wp",
		image: "/wordpress-gatsby.jpg",
		siteUrl: "https://barcadia.netlify.com",
		developerName: "Morgan Baker Development",
		developerUrl: "https://www.morganbaker.dev",
		secondDeveloperName: "Jefferson Real",
		secondDeveloperUrl: "https://jeffersonreal.uk/",
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `logos`,
				path: `${__dirname}/static/logos/`,
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: process.env.WP_GRAPHQL_ENDPOINT_URL,
				auth: {
					// Only required if your WordPress site is behind Basic Auth.
					htaccess: {
						username: process.env.HTTPBASICAUTH_USERNAME,
						password: process.env.HTTPBASICAUTH_PASSWORD,
					}
				},
				verbose: true,
				searchAndReplace: [
					{
						// This is a regex search and replace rule to find any occurances of the
						// WordPress source URL and replace it with the URL of the Gatsby site.
						search: process.env.WP_SOURCE_BASE_URL,
						replace: process.env.GATSBY_WEBSITE_URL,
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
			resolve: "@pasdo501/gatsby-source-woocommerce",
			options: {
				// Base URL of the WordPress site.
				api: process.env.DOMAIN,
				// True if using https. false otherwise.
				https: true,
				// API keys obtained from the WooCommerce dashboard in WordPress.
				api_keys: {
					consumer_key: process.env.WOO_KEY,
					consumer_secret: process.env.WOO_SECRET,
				},
				// Array of strings with fields you'd like to create nodes for.
				fields: ['products'],
				// OPTIONAL: How many results to retrieve per request.
				per_page: 100,
			}
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://barcadia.netlify.com",
				sitemap: "https://barcadia.netlify.com/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
	],
}
