import * as React from "react"
import { SimpleBannerStyles } from "./SimpleBannerStyles"
import PropTypes from "prop-types"

const SimpleBanner = ({ children, title, content }) => {
	return (
		<SimpleBannerStyles>
			{children}

			{title && (
				<div className="container">
					<div className="banner__content">
						<h1>
							{title}
							<span style={{ color: "var(--primary)" }}>.</span>
						</h1>
						{content && (
							<div
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						)}
					</div>
				</div>
			)}
			<div className="gradient"></div>
		</SimpleBannerStyles>
	)
}

SimpleBanner.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	content: PropTypes.string,
}

export default SimpleBanner
