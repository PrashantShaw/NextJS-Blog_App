import React from 'react'
import Card from '../card/Card'
// import { useRouter } from 'next/router'
// import { useGetPostById } from '../../hooks/api/getPostById'

const Blog = ({ post }) => {
    //   const router = useRouter()
    console.log('&&&&', post)
    //   const queryId = router.query.blogId
    //   const { isLoading, error, data: post = {} } = useGetPostById(queryId)

    //   console.log('%%%%%', post)
    //   if (isLoading) {
    //     return <h2 style={{ textAlign: 'center' }}>Loading ...</h2>
    //   }
    //   if (error) {
    //     return <h2>{error.message}</h2>
    //   }
    return (
        <Card post={post} />
    )
}

export default Blog