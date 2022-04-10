import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

interface ButtonProps {
	text?: string
	to?: string
	as?: string
	arrow?: boolean
}

const Button = ({ text, to, as, arrow }: ButtonProps) => {
	return (
		<ButtonStyles className="btn" as={as} to={to}>
			{text}
			{arrow || to ? <Arrow style={{ marginLeft: "10px" }} /> : null}
		</ButtonStyles>
	)
}

export default Button
