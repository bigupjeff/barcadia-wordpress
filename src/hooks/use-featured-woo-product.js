import { graphql, useStaticQuery } from "gatsby"

const useFeaturedProduct = () => {
	const {
		allWcProducts: { nodes },
	} = useStaticQuery(graphql`
		query featuredWooProductsQuery {
			allWcProducts(
				sort: { fields: date_created, order: DESC }
				filter: {
					categories: { elemMatch: { name: { eq: "Featured" } } }
				}
			) {
				nodes {
					name
					slug
					short_description
					headerImage: images {
						alt
						localFile {
							childImageSharp {
								gatsbyImageData(
									width: 1000
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
								)
							}
						}
					}
				}
			}
		}
	`)
	return nodes
}

export default useFeaturedProduct
