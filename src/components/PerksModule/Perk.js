import * as React from "react"
import { PerkStyles } from "./PerksModuleStyles"
import PropTypes from "prop-types"

const Perk = ({ children, title, content }) => {
	return (
		<PerkStyles>
			{children}
			{title && <h3>{title}</h3>}
			{content && <p>{content}</p>}
		</PerkStyles>
	)
}

Perk.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	content: PropTypes.string,
}

export default Perk
