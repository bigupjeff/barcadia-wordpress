import React, { useState } from "react"
import { FaqStyles } from "./FaqStyles"
import { MdExpandMore as Chevron } from "react-icons/md"
import { motion } from "framer-motion"

interface FaqProps {
	title?: string
	description?: string
}

const Faq = ({ title, description }: FaqProps) => {
	const [showInfo, setInfo] = useState(false)

	const faqVariants = {
		open: {
			opacity: 1,
			height: "auto",
		},
		closed: {
			opacity: 0,
			height: 0,
		},
	}

	const toggleInfo = () => {
		setInfo((showInfo) => !showInfo)
	}
	return (
		<FaqStyles className={showInfo ? `${"faq-open"}` : `${"faq-closed"}`}>
			<button className="question" onClick={toggleInfo}>
				{title}
				<div className="trigger">
					<Chevron />
				</div>
			</button>
			{showInfo && (
				<motion.div
					initial="closed"
					animate={showInfo ? "open" : "closed"}
					variants={faqVariants}
					className="answer"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
		</FaqStyles>
	)
}

export default Faq
