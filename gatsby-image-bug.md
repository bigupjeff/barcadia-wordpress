
Threads:

[slack](https://app.slack.com/client/T3PDM1KRC/C3NM1M291/thread/C3NM1M291-1648855322.131209)
[GitHub](https://github.com/gatsbyjs/gatsby/discussions/30772)

Gatsby doesn't create nodes for featured images when WordPress plugin "WPGraphQL WooCommerce (WooGraphQL)" is active.

GraphiQL IDE (mediaItems) returns all media nodes.
Altair GraphQL client (mediaItems) returns all media nodes.

Gatsby `allWpMediaItem` returns only content-inline media nodes, NOT featured `featuredImage` nodes.
Gatsby `allWpPage` and `allWpPost` return ID values for `featuredImageId`.


**Gatsby Plugins**
	- gatsby-plugin-react-helmet
	- gatsby-plugin-sitemap
	- gatsby-source-filesystem
	- gatsby-source-contentful
	- gatsby-source-wordpress
	- @pasdo501/gatsby-source-woocommerce
	- gatsby-plugin-robots-txt
	- gatsby-transformer-sharp
	- gatsby-plugin-sharp
	- gatsby-plugin-styled-components
	- gatsby-plugin-image

**WordPress Media Library - 32 Images**
	- mix of png/webp/jpg.
	- x2 'Unattached'.
	- x3 featured images on published pages.
	- x4 featured images on published posts.
	- x2 inline images on published posts .
	- all others are used on published woo products.

`gatsby clean && gatsby develop` always used to avoid dirty cache issues.


### Environment 1 - 2 Nodes

`allWpMediaItem` nodes : 2

WordPress Enabled Plugins:
	- WP Gatsby
	- WP GraphQL
	- WooCommerce
	- WPGraphQL WooCommerce (WooGraphQL)

WP-debug output at Gatsby build time:
```
[05-Apr-2022 17:25:18 UTC] PHP Warning:  Trying to access array offset on value of type bool in /var/www/wp-source.bigupweb.uk/wp-content/plugins/wp-gatsby/src/Schema/WPGatsbyWPGraphQLSchemaChanges.php on line 54
```
Gatsby GraphQL Output 
```
{
  "data": {
    "allWpMediaItem": {
      "nodes": [
        {
          "id": "cG9zdDoxNDE=",
          "filename": "Steve_Jobs_Headshot_2010-CROP_cropped_2.jpg"
        },
        {
          "id": "cG9zdDo5NQ==",
          "filename": "ipad-3-scaled.jpg"
        }
      ]
    }
  },
  "extensions": {}
}
```

### Environment 2 - 9 Nodes

`allWpMediaItem` nodes : 9

WordPress Enabled Plugins:
	- WP Gatsby
	- WP GraphQL

WP-debug output at Gatsby build time:
None

Gatsby GraphQL Output 
```
{
  "data": {
    "allWpMediaItem": {
      "nodes": [
        {
          "id": "cG9zdDoxNDE=",
          "filename": "Steve_Jobs_Headshot_2010-CROP_cropped_2.jpg"
        },
        {
          "id": "cG9zdDo5NQ==",
          "filename": "ipad-3-scaled.jpg"
        },
        {
          "id": "cG9zdDo3",
          "filename": "bigup-web-logo-600.png"
        },
        {
          "id": "cG9zdDoxNjA=",
          "filename": "the-ok-gatsby.webp"
        },
        {
          "id": "cG9zdDoxNTc=",
          "filename": "great-gatsby.webp"
        },
        {
          "id": "cG9zdDoxMTY=",
          "filename": "pexels-photo-4071887.jpeg"
        },
        {
          "id": "cG9zdDoxMzk=",
          "filename": "Тим_Кук_02-09-2021.jpg"
        },
        {
          "id": "cG9zdDoxMDc=",
          "filename": "imac-3.jpg"
        },
        {
          "id": "cG9zdDoxMzc=",
          "filename": "Jonathan_Ive_OTRS.jpg"
        }
      ]
    }
  },
  "extensions": {}
}
```

### Environment 3 - 9 Nodes

`allWpMediaItem` nodes : 9

WordPress Enabled Plugins:
	- WP Gatsby
	- WP GraphQL
	- WooCommerce

WP-debug output at Gatsby build time:
None

Gatsby GraphQL Output 
```
{
  "data": {
    "allWpMediaItem": {
      "nodes": [
        {
          "id": "cG9zdDoxNDE=",
          "filename": "Steve_Jobs_Headshot_2010-CROP_cropped_2.jpg"
        },
        {
          "id": "cG9zdDo5NQ==",
          "filename": "ipad-3-scaled.jpg"
        },
        {
          "id": "cG9zdDo3",
          "filename": "bigup-web-logo-600.png"
        },
        {
          "id": "cG9zdDoxNjA=",
          "filename": "the-ok-gatsby.webp"
        },
        {
          "id": "cG9zdDoxNTc=",
          "filename": "great-gatsby.webp"
        },
        {
          "id": "cG9zdDoxMTY=",
          "filename": "pexels-photo-4071887.jpeg"
        },
        {
          "id": "cG9zdDoxMzk=",
          "filename": "Тим_Кук_02-09-2021.jpg"
        },
        {
          "id": "cG9zdDoxMDc=",
          "filename": "imac-3.jpg"
        },
        {
          "id": "cG9zdDoxMzc=",
          "filename": "Jonathan_Ive_OTRS.jpg"
        }
      ]
    }
  },
  "extensions": {}
}
```

