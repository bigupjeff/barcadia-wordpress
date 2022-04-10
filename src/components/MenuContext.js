import React, { useState } from "react"
import PropTypes from "prop-types"

// Create the context
const MenuContext = React.createContext()

export function MenuProvider({ children }) {
	// Place state in here
	const [isOpen, setNav] = useState([])

	return (
		<MenuContext.Provider value={[!isOpen, setNav]}>
			{children}
		</MenuContext.Provider>
	)
}

MenuProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MenuContext
