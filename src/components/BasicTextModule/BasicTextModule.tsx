import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

interface BasicTextModuleProps {
	title?: string
	content?: string
	link?: string
	linkText?: string
}

const BasicTextModule = ({
	title,
	content,
	link,
	linkText,
}: BasicTextModuleProps) => {
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

export default BasicTextModule
