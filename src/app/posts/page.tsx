

import { PostList } from '@/widgets/postList'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'


export default function PostsPage() {
  return (
    < >
      <Box
        sx={{
          position: 'fixed',
          paddingTop: '300px',
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
      <Container maxWidth="md" sx={{ py: 4 }} >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom

          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',


          }}
        >
          Список с постов!
        </Typography>
        <PostList />
      </Container>
    </ >
  )
}