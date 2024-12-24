'use client'

import { deleteToken } from '@/utils/token'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LogoutPage = () => {
  const router = useRouter()
  useEffect(() => {
    deleteToken()
    router.push('/signin')
  }, [])

  return
}

export default LogoutPage
