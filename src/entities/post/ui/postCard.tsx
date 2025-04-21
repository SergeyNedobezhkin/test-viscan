'use client'

import { Post } from '../types'
import { Card, CardContent, Button, Typography } from '@mui/material'
import css from "./postCard.module.scss"
interface PostCardProps {
  onClick?: (e: React.MouseEvent) => void
  post: Post
}

export function PostCard({ post, onClick }: PostCardProps) {

  return (
    <Card
      variant="outlined">
      <CardContent className={css.post}>
        <Typography variant="h6" gutterBottom>
          <p className={css.post__textTitle}>№ {post.id} : {post.title}</p>
        </Typography>
        <Typography variant="body1" paragraph>
          <p className={css.post__textBody}>
            {post.body}
          </p>
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onClick}
          type='button'
        >
          Просмотр
        </Button>
      </CardContent>
    </Card >
  )
}