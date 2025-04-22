'use client'
import { usePost, useUser } from '@/features/posts/hooks'
import { BackgroundPage } from '@/shared/ui/backgroundPage'
import { Loader } from '@/shared/ui/loading'
import { Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

export default function PostPage({ params }: { params: { id: string } }) {
  const { data: post, isLoading: isLoadingPost } = usePost(params.id)
  const { data: user, isLoading: isLoadingUser } = useUser(post?.userId || 0)

  if (isLoadingPost) return <Loader />

  return (
    <Container maxWidth="md" sx={{
      py: 4,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Link href="/posts">
        <Button variant="outlined" sx={{ mb: 4 }}>
          Назад
        </Button>
      </Link>

      {isLoadingUser ? <Loader /> :
        <BackgroundPage>
          <Typography variant="h3" component="h1" gutterBottom>
            {post?.title}
          </Typography>

          <Typography variant="h5" color="secondary" gutterBottom>
            Автор: {user?.name}
          </Typography>

          <Typography variant="h6" paragraph>
            {post?.body}
          </Typography>
        </BackgroundPage>
      }
    </Container>
  )
}