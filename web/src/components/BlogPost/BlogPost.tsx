import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'
const BlogPost = ({ post }: Post) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div>{post.body}</div>
    </article>
  )
}

export default BlogPost
