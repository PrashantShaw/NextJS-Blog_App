import { useQuery } from '@tanstack/react-query'

export const useGetPosts = () => {

    /**
     * const URI = process.env.BASE_API_URI
     * above will not work because, URI from env is availabe after component mounted/loaded.
     */

    const URI = 'https://jsonplaceholder.typicode.com/posts'
    
    return useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch(URI)
                .then(res => res.json())
                .then(data => data)
                .catch(err => console.error(err))
    })
}