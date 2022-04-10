import * as React from "react"
import { PostItemsStyles } from "./PostStyles"

interface PostItemsProps {
	children: React.ReactNode
}

const PostItems = ({ children }: PostItemsProps) => {
	return <PostItemsStyles>{children}</PostItemsStyles>
}

export default PostItems
