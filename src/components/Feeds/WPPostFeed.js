import React from "react"
import PostItem from "../Post/WPPostItem"
import useAllPost from "../../hooks/wp-use-all-blog-post"

const ProductFeed = () => {
  const allPost = useAllPost()

  return allPost.map((node, index) => {
    return <PostItem key={index} node={node} />
  })
}

export default ProductFeed
