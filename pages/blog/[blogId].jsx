export { default } from '../../components/blog/ViewBlog'

export const getServerSideProps = async (context) => {
  const blogId = context.params.blogId

  const BASE_URI = 'https://jsonplaceholder.typicode.com/posts'
  const DATA_URL = `${BASE_URI}/${blogId}`

  const res = await fetch(DATA_URL)
  const data = await res.json()
  
  return {
    props: { post: data }
  }
}