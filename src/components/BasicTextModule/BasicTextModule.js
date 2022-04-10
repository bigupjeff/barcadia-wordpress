import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const BasicTextModule = ({ title, content, link, linkText }) => {
	return (
		<BasicTextModuleStyles className="section">
			<div className="container container__tight">
				<div>
					{title && <h2>{title}</h2>}
					{content && (
						<p style={{ marginBottom: "60px" }}>{content}</p>
					)}

					<Button text={linkText} as={Link} to={link} />
				</div>
			</div>
		</BasicTextModuleStyles>
	)
}

BasicTextModule.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	link: PropTypes.string,
	linkText: PropTypes.string,
}

export default BasicTextModule
