import { Link, routes } from '@redwoodjs/router'
import BlogPostCell from 'src/components/BlogPostCell'
import { MetaTags } from '@redwoodjs/web'

const BlogPostPage = ({ id }) => {
  return (
    <>
      <MetaTags title="BlogPost" description="BlogPost page" />

      <BlogPostCell id={id} rand={Math.random()} />
    </>
  )
}

export default BlogPostPage
