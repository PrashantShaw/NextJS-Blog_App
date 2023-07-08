import React from 'react'
import {useRouter} from 'next/router'

const Row = ({ post }) => {
    const router = useRouter()
    const handleOnPostSelection = () =>{
        router.push(`/blog/${post.id}`)
    }
    return (
        <div className='row' onClick={handleOnPostSelection}>
                <span className='row-index'>{post.id}</span>
                <span className='row-text'>{post.title}</span>
        </div>
    )
}

export default Row