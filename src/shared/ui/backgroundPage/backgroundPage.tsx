'use client'

import { Box } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react"

interface BackgroundPageProps {
  children: ReactNode;
}

export const BackgroundPage = ({ children }: BackgroundPageProps) => {
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
      {children}
    </>
  )
}