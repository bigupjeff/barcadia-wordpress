import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const {
    allWpPost: { nodes },
	} = useStaticQuery(graphql`
		query wpLatestBlogLinksQuery {
			allWpPost(sort: {fields: date, order: DESC}) {
				nodes {
					title
					date(formatString: "DD MMMM YYYY")
					excerpt
					slug
				}
			}
		}  
	`)
	return nodes
  }

export default useLatestPost