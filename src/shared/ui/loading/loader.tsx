'use client'

import { CircularProgress } from '@mui/material'
import css from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={css.container}>
      <CircularProgress />
    </div>
  )
}