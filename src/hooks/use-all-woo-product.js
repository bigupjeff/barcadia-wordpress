import { graphql, useStaticQuery } from "gatsby"

const useAllProduct = () => {
  const {
    allContentfulProduct: { nodes },
	} = useStaticQuery(graphql`
		query allWooProductLinksQuery {
			allWcProducts(sort: {fields: date_created, order: DESC}) {
				nodes {
					name
					slug
					short_description
					sku
					price
					description
					headerImage: images {
						localFile {
							childImageSharp {
								gatsbyImageData(
									width: 1000,
									placeholder: BLURRED,
									formats: [AUTO, WEBP, AVIF]
								)
							}
						}
						alt
					}
				}
			}
		}
	`)

  return nodes
}

export default useAllProduct
