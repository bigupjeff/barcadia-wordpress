import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

interface WooBannerModuleProps {
	children?: React.ReactNode
	title?: string
	subTitle?: string
	price?: string
	enquire?: boolean
}

const WooBannerModule = ({
	children,
	title,
	subTitle,
	price,
	enquire,
}: WooBannerModuleProps) => {
	function scrollToArea() {
		navigate("#topContent")
	}

	return (
		<>
			<BannerModuleStyles>
				{children ? (
					children
				) : (
					<StaticImage
						className="banner__image"
						imgClassName="banner__image--content"
						src="../../../static/wordpress-gatsby.webp"
						alt="Banner Image"
						layout="fullWidth"
						placeholder="blurred"
					/>
				)}

				<div className="container">
					<div className="banner__content">
						{title && (
							<h1>
								{title}
								<span style={{ color: "var(--primary)" }}>
									.
								</span>
							</h1>
						)}
						{subTitle && (
							<h2
								dangerouslySetInnerHTML={{ __html: subTitle }}
							/>
						)}
						{price && (
							<h2 className="price">
								£{price}
								<span style={{ color: "var(--primary)" }}>
									.
								</span>
							</h2>
						)}
						<div className="banner__btns">
							{enquire && (
								<Button
									className="btn"
									text="Enquire Now"
									as={Link}
									to="/contact"
								/>
							)}
							<Button onClick={scrollToArea} text="Learn More" />
						</div>
					</div>
				</div>
				<div className="gradient"></div>
			</BannerModuleStyles>
			<span id="topContent"></span>
		</>
	)
}

export default WooBannerModule
