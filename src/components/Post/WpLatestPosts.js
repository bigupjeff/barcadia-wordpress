import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import WpPostItem from "./WpPostItem"
import useLatestBlogPost from "../../hooks/wp-use-latest-blog-post"
import Button from "../Button/Button"

/**
 * LatestPosts Section
 *
 * @param {string} title (passed in context)
 * @param {string} introduction (passed in context)
 * @returns Latest posts section component.
 *
 */
const LatestPosts = ({ title, introduction }) => {
	const latestBlogPost = useLatestBlogPost()
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
					{latestBlogPost.map((node, index) => {
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

export default LatestPosts
