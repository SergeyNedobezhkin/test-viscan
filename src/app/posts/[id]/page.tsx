'use client'
import { usePost, useUser } from '@/features/posts/hooks'
import { Loader } from '@/shared/ui/loading'
import { Button, Container, Typography, CircularProgress, Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function PostPage({ params }: { params: { id: string } }) {
  const { data: post, isLoading: isLoadingPost } = usePost(params.id)
  const { data: user, isLoading: isLoadingUser } = useUser(post?.userId || 0)

  if (isLoadingPost) return <Loader />

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Link href="/posts">
        <Button variant="outlined" sx={{ mb: 4 }}>
          Назад
        </Button>
      </Link>

      {isLoadingUser ?
        <Loader /> :
        <>
          <Box
            sx={{
              position: 'fixed',
              paddingTop: '350px',
              top: 0,
              left: '25%',
              width: '50%',
              height: '50%',
              zIndex: -1,
              opacity: 0.5
            }}
          >
            <Image
              src={'https://viscan.ru/images/trails.webp'}
              alt='Фоновое изображение'
              fill
              style={{
                objectFit: 'cover'
              }}
              quality={100}
              priority
            />
          </Box>
          <Typography variant="h3" component="h1" gutterBottom>
            {post?.title}
          </Typography>

          <Typography variant="h5" color="secondary" gutterBottom>
            Автор: {user?.name}
          </Typography>

          <Typography variant="h6" paragraph>
            {post?.body}
          </Typography>
        </>
      }
    </Container>
  )
}