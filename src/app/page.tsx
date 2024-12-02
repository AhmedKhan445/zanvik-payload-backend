import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  authors: [{ name: 'Ahmed Khan' }],
  title: 'Zanvik Backend',
  description:
    'Explore a stunning range of beautiful artificial jewelry at Zanvik Store. Choose from necklaces, bracelets, earrings, rings, and customizable accessories to elevate your fashion. Enjoy an exceptional shopping experience at zanvik.store.',
  keywords:
    'jewelry, artificial jewelry, online shopping, pakistani jewelry, earrings, rings, necklaces, zanvik',
  openGraph: {
    title: 'Zanvik Backend',
    description:
      'Explore a stunning range of beautiful artificial jewelry at Zanvik Store. Choose from necklaces, bracelets, earrings, rings, and customizable accessories to elevate your fashion. Enjoy an exceptional shopping experience at zanvik.store.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zanvik Store',
    url: './',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanvik Backend',
    description:
      'Explore a stunning range of beautiful artificial jewelry at Zanvik Store. Choose from necklaces, bracelets, earrings, rings, and customizable accessories to elevate your fashion. Enjoy an exceptional shopping experience at zanvik.store.',
  },
  alternates: {
    canonical: './',
  },
}

export default function Home() {
  return (
    <main
      style={{
        height: '100svh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          lineHeight: `${4 * 1.2}rem`,
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
        }}
      >
        Zanvik Backend
      </h1>
      <Link
        style={{
          fontSize: '1.25rem',
          lineHeight: `${1.25 * 1.5}rem`,
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
          color: 'black',
        }}
        href="/admin"
      >
        Go To Admin Panel
      </Link>
    </main>
  )
}
