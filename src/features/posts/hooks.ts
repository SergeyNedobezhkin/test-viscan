import { useQuery } from '@tanstack/react-query'
import { fetchGetPosts, fetchGetPost, fetchGetUser } from './api'

export const usePosts = () => useQuery({
  queryKey: ['posts'],
  queryFn: fetchGetPosts,
})

export const usePost = (id: string) => useQuery({
  queryKey: ['post', id],
  queryFn: () => fetchGetPost(id),
})

export const useUser = (userId: number) => useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchGetUser(userId),
  enabled: !!userId,
})
