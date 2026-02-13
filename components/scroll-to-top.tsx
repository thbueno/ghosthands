'use client'

import { useEffect } from 'react'

export function ScrollToTop({ id }: { id?: string }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return null
}
