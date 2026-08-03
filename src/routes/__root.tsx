import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'
import { yayasan } from '#/lib/site-data'

const siteTitle = 'Yayasan At-Tauhid Al Islamy Bangka Belitung'
const siteDescription =
  'Yayasan pendidikan Islam di Pangkal Pinang yang menaungi TK, SD, SMP, dan SMA Tahfizh Al-Qur’an At-Tauhid.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/logo-yayasan.png' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/logo-yayasan.png', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/logo-yayasan.png' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: yayasan.namaResmi,
          email: yayasan.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: yayasan.alamat,
            postalCode: yayasan.kodePos,
            addressCountry: 'ID',
          },
          sameAs: [yayasan.instagram],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-emerald-950 dark:bg-emerald-950 dark:text-emerald-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
