import { useQuery } from '@tanstack/react-query'

export const useGetPostById = (postId) => {

    const enabled = !!postId

    /**
     * const BASE_URI = process.env.BASE_API_URI
     * above will not work because, URI from env is availabe after component mounted/loaded.
     */

    const BASE_URI = 'https://jsonplaceholder.typicode.com/posts'
    const DATA_URL = `${BASE_URI}/${postId}`

    return useQuery({
        queryKey: ['postById', postId],
        queryFn: () =>
            fetch(DATA_URL)
                .then(res => res.json())
                .then(data => data)
                .catch(err => console.error(err))
        ,
        enabled // if postId is there, then only enable fetching
    })
}