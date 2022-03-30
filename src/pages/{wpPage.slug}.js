import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/wp-default-template"
import FeedTemplate from "../templates/wp-feed-template"

const getTemplate = (wpPage) => {
	const templateName = wpPage.template.templateName

	console.log('<<<<< jeff debug wpPage.slug.js >>>>>')
	console.log(wpPage)

	switch (templateName) {

		case "Feed":
			return <FeedTemplate {...wpPage} />

		default:
			return <DefaultTemplate {...wpPage} />
	}
}

const Page = ({ data: { wpPage } }) => {
  	return <main>{getTemplate(wpPage)}</main>
}

export const data = graphql`
	query wpPageQuery($id: String) {
		wpPage(id: {eq: $id}) {
			template {
				templateName
			}
			title
			content
			featuredImage {
				node {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData(
								width: 2000,
								formats: [AUTO, WEBP, AVIF],
								placeholder: BLURRED)
						}
					}
				}
			}
		}
	}
`

export default Page



/*
http://localhost:8000/___graphql


query MyQuery {
  allWpPage {
    edges {
      node {
        title
        slug
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        id
      }
    }
  }
}


*/