import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { ReactNode } from 'react'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <header>
        {/* TODO: ヘッダーを作る */}
        <Link href="/">namekosiu</Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
