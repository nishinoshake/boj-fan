import type { Metadata } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import '../styles/globals.scss'
import Menu from '@/components/layout/Menu'
import styles from './layout.module.scss'

const notoSerif = Noto_Serif_JP({
  variable: '--font-noto-serif',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: '日銀日和',
  description: '日本銀行の非公式ファンサイト、日銀日和（にちぎんびより）です。'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSerif.variable}`}>
      <body>
        <div className={styles.container}>
          <Menu />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
