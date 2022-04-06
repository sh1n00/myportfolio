import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name: string = 'shino'
export const site: string = 'Next js'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src="/namekosiru2.svg"
            width={170}
            height={100}
            className={styles.image}
          />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
