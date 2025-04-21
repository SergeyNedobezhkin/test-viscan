'use client'
import { Box, CircularProgress, Typography } from '@mui/material'
import { usePosts } from '../features/posts/hooks'
import { useRouter } from 'next/navigation'
import { PostCard } from '@/entities/post/ui/postCard'
import { Loader } from '@/shared/ui/loading'

export function PostList() {
  const { data: posts, isLoading, error } = usePosts()
  const router = useRouter()

  if (isLoading) return <Loader />
  if (error) return <Typography color="error">Error loading posts</Typography>

  const handleClick = (e: React.MouseEvent, postId: number) => {
    e.preventDefault()
    router.push(`/posts/${postId}`)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClick={(e) => handleClick(e, post.id)}
        />
      ))}
    </Box>
  )
}
