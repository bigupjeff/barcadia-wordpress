import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import PostItem from "./WPPostItem"
import useLatestBlogPost from "../../hooks/wp-use-latest-blog-post"
import Button from "../Button/Button"

const LatestPosts = ({ title, excerpt }) => {
  const latestBlogPost = useLatestBlogPost()
  return (
    <div className="section">
      <div className="container container__tight">
        {title || excerpt ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
                <span>.</span>
              </h2>
            )}
            {excerpt && <p dangerouslySetInnerHTML={{ __html: excerpt }} />}
          </div>
        ) : null}

        <PostItems>
          {latestBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} />
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