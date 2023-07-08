import React from 'react'
import { useGetPosts } from '../../hooks/api/getPosts'
import Row from '../card/Row'

const BlogPage = () => {
  const { isLoading, error, data: posts = [] } = useGetPosts()
  console.log(isLoading, error, posts)
  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>Loading ...</h2>
  }
  if (error) {
    return <h2>{error.message}</h2>
  }
  return (
    <div className='blog-container'>
      <h2>This is blog page</h2>
      <div>
        {posts
          .map(post =>
            <Row key={post.id} post={post} />
          )}
      </div>
    </div>)
}

export default BlogPage