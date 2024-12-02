import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://zanvik.store'),
  title: {
    template: '%s | Zanvik Store',
    default: 'Zanvik Store',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0, boxSizing: 'border-box' }}>{children}</body>
    </html>
  )
}
