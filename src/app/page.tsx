// src/app/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader } from '@/shared/ui/loading'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/posts')
  }, [router])

  return <Loader />
}