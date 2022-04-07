import React from "react"
import { graphql } from "gatsby"
import ProductTemplate from "../../templates/woo-product-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Product = ({ data: { wcProducts } }) => {
  return (
    <>
      <Seo title={wcProducts.name} />
      <Layout>
        <ProductTemplate {...wcProducts} />
      </Layout>
    </>
  )
}

/*
This query needs cleaning up. headerImage is an alias to get higher res images for the product
header. Currently, we only need one image, so rather than Gatsby trawling all images twice, it
would be better if the query stopped aftert finding the first image (which is the main Woo product
image). I believe this problem can be solved by adding a custom resolver as per:

https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createResolvers
*/

export const data = graphql`
	query wooProductQuery($id: String) {
		wcProducts(id: {eq: $id}) {
			name
			price
			short_description
			description
			headerImage: images {
				alt
				localFile {
					childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH,
							placeholder: BLURRED,
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
			images {
				alt
				localFile {
					childImageSharp {
						gatsbyImageData(
							width: 1000,
							placeholder: BLURRED,
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
			attributes {
				name
				options
			}
		}
	}
`

export default Product
