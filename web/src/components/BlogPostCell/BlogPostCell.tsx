import type { FindBlogPostQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import BlogPost from 'src/components/BlogPost'

type IRand = {
  rand: number
}

export const QUERY = gql`
  query FindBlogPostQuery($id: String!) {
    blogPost: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  blogPost,
}: CellSuccessProps<FindBlogPostQuery & IRand>) => {
  return <BlogPost post={blogPost} />
}
