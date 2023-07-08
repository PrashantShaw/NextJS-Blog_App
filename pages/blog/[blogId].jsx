import React from 'react'
import { useRouter } from 'next/router'
import { useGetPostById } from '../../hooks/api/getPostById'

const Blog = () => {
  const router = useRouter()
  // console.log('blog page', router)
  const queryId = router.query.blogId
  const { isLoading, error, data: post = {} } = useGetPostById(queryId)

  console.log('%%%%%', post)
  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>Loading ...</h2>
  }
  if (error) {
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      <div className="post-id">{post.id}</div>
      <div className="post-title-body">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Blog