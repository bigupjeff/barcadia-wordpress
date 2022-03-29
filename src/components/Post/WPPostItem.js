import * as React from "react"
import Button from "../Button/Button"
import { PostItemStyles } from "./PostStyles"

const BlogItem = ({ node }, key) => {
	const { title, slug, excerpt, date } = node
	const uri = `/blog/` + slug
	return (
		<PostItemStyles key={key} to={uri}>
			<h4>{title}</h4>
			{excerpt && <p dangerouslySetInnerHTML={{ __html: excerpt }} />}
			<div className="blogitem__meta">
				<Button as="span" text="Read More" arrow={true} />
				<p>{date}</p>
			</div>
		</PostItemStyles>
	)
}

export default BlogItem
