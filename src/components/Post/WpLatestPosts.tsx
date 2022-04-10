import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import WpPostItem from "./WpPostItem"
import useWpLatestPosts from "../../hooks/useWpLatestPosts"
import Button from "../Button/Button"

interface WpLatestPostsProps {
	title?: string
	introduction?: string
}

const WpLatestPosts = ({ title, introduction }: WpLatestPostsProps) => {
	const WpLatestPosts = useWpLatestPosts()
	return (
		<div className="section">
			<div className="container container__tight">
				{title || introduction ? (
					<div className="intro__area">
						{title && (
							<h2>
								{title}
								<span>.</span>
							</h2>
						)}
						{introduction && <p>{introduction}</p>}
					</div>
				) : null}

				<PostItems>
					{WpLatestPosts.map((node, index) => {
						return <WpPostItem key={index} node={node} />
					})}
				</PostItems>
				<div className="learn__more">
					<Button text="All Blog Posts" as={Link} to="/blog" />
				</div>
			</div>
		</div>
	)
}

export default WpLatestPosts
