import type { ReactNode } from 'react'
import './globals.css'
export const metadata = {
  title: 'Wonder-hover',
  description: 'Test task for Star Navi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
