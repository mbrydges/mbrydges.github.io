import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
 
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

/* Improve SEO by generating <head> elements for pages */ 
export const metadata: Metadata = {
  title: 'mbrydges',
  description: 'I build digital solutions for small businesses.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
