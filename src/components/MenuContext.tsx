import React, { useState } from "react"

// Create the context
const MenuContext = React.createContext()

interface MenuProviderProps {
	children: React.ReactNode
}

export function MenuProvider({ children }: MenuProviderProps) {
	// Place state in here
	const [isOpen, setNav] = useState([])

	return (
		<MenuContext.Provider value={[!isOpen, setNav]}>
			{children}
		</MenuContext.Provider>
	)
}

export default MenuContext
