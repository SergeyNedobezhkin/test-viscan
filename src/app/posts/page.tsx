

import { BackgroundPage } from '@/shared/ui/backgroundPage'
import { PostList } from '@/widgets/postList'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'


export default function PostsPage() {
  return (
    <BackgroundPage >
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
          Список постов!
        </Typography>
        <PostList />
      </Container>
    </BackgroundPage>
  )
}