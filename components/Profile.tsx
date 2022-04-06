import Image from 'next/image'

import styles from './profile.module.css'
import utilStyles from '../styles/utils.module.css'

export const Profile = () => {
  return (
    <div className={styles.content}>
      <Image
        src="/icon.jpg"
        alt="icon"
        width={160}
        height={160}
        className={utilStyles.borderCircle}
      />
      <h1 className={utilStyles.heading2Xl}>namekosiru</h1>
    </div>
  )
}
