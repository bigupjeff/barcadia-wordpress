import React from "react"
import WpPostItem from "../Post/WpPostItem"
import useAllPost from "../../hooks/wp-use-all-blog-post"

const WpPostFeed = () => {
	const allPost = useAllPost()
	return allPost.map((node, index) => {
		return <WpPostItem key={index} node={node} />
	})
}

export default WpPostFeed
