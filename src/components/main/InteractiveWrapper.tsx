'use client'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function InteractiveWrapper({ children }: Props) {
  return (
    <div className="flex flex-col gap-10">
      {children}
    </div>
  )
}
