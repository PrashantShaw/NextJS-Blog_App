import React from 'react'
import styles from '../../styles/Card.module.css'

const BlogCard = ({ post }) => {
    return (
        <div className={styles.card}>
            <div className={styles.post_id}>{post.id}</div>
            <div className={styles.post_title_body}>
                <h2 className={styles.post_title}>{post.title}</h2>
                <p className={styles.post_body}>{post.body}</p>
            </div>
        </div>
    )
}

export default BlogCard