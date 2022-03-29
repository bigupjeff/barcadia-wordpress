import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import LatestPosts from "../components/Post/WPLatestPosts"

const PostTemplate = (wordpressPost) => {
	const { title, date, content } = wordpressPost
	return (
		<>
			<section>
				<PostSingleStyles>
					{title && <h1 className="blogsingle__title">{title}</h1>}
					{date && (
						<p className="blogsingle__date">Posted on {date}</p>
					)}
					{content && (
						<article className="blogsingle__content">
							<div dangerouslySetInnerHTML={{ __html: content }} />

							<div className="blogsingle__back">
								<Button to="/blog" text="Back to Blog" as={Link} />
							</div>
						</article>
					)}
				</PostSingleStyles>
			</section>
			<LatestPosts title="Further reading from WordPress" />
		</>
	)
}

export default PostTemplate