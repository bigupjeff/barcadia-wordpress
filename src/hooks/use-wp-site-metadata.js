import { useStaticQuery, graphql } from "gatsby"

export const UseWpSiteMetadata = () => {
	const { wp } = useStaticQuery(
		graphql`
			query WpSiteMetadataQuery {
				wp {
					allSettings {
						generalSettingsDescription
						generalSettingsTitle
					}
				}
			}
		`
	)
	return wp.allSettings
}
export default UseWpSiteMetadata
