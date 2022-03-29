import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const {
    allWpPost: { nodes },
  } = useStaticQuery(graphql`
    query wpAllBlogLinksQuery {
		allWpPost(sort: {fields: date, order: DESC}) {
			nodes {
				title
				slug
				date(formatString: "DD MMMM YYYY")
				excerpt
				content
			}
		}
    }
  `)

  return nodes
}
export default useAllBlogPost