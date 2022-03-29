
# Barcadia V2 Starter - WordPress Mashup

### Intentions

- Take this GatsbyJS starter theme, and transplant WordPress in place of Contentful.
- Keep sourcing as simple as Contenful.
- Keep the theme as close to it's OG as possible.



# Anything below this line is a work in progress, not ready for use!

**Prerequisites**

 - Have a WordPress installation running and accessible via http to use as a data source.


### Setup the Gatsby WP Source plugin

'npm install gatsby-source-wordpress'

There are some helpful notes regarding gatsby-source-wordpress on the npjms.com page
[here](https://www.npmjs.com/package/gatsby-source-wordpress/v/3.10.0-next.1).

Configure the plugin in `gatsby-config.js` with **url** as a bare minimum:
```
plugins: [
	{
		resolve: `gatsby-source-wordpress`,
		options: {
			url: "https://source.wp-website/graphql",
			// Search and Replace Urls across WordPress content. For use if your WP instance is at a
			// different URL to the dev/production envs.
			searchAndReplaceContentUrls: {
				sourceUrl: "https://source.wp-website",
				replacementUrl: "https://gatsby.wp-website",
			},
		},
	},
],
```

### Setup WPGatsby and WPGraphQL Plugins in WordPress

Search for, install and activate these on the WP plugin page:

 - WP GraphQL
 - WP Gatsby



##### Props to the OG dev here:

[Barcadia OG Repo](https://github.com/bagseye/barcadia)

[Barcadia Version 2 Release Notes](https://www.morganbaker.dev/journal/barcadia-v2-release-notes)