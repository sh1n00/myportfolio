import Image from 'next/image'
import Link from 'next/link'

import { Stack, Icon, Text, Center, Box, Square } from '@chakra-ui/react'

import styles from './profile.module.css'
import utilStyles from '../styles/utils.module.css'

import { ProfileData } from './data/ProfileData'

export const Profile = () => {
  return (
    <Box className={styles.content}>
      <Image
        src="/icon.jpg"
        alt="icon"
        width={160}
        height={160}
        className={utilStyles.borderCircle}
      />
      <Text className={utilStyles.heading2Xl} mt={1}>
        namekosiru
      </Text>
      <Text mt={0} pb={3}>
        AR VR CV HCI
      </Text>

      <Stack direction="row">
        {ProfileData.map((data, i) => (
          <IconItem
            key={i}
            title={data.title}
            bg={data.bg}
            icon={data.icon}
            url={data.url}
          />
        ))}
      </Stack>
    </Box>
  )
}

type Icon = {
  title: string
  bg: string
  icon: any
  url: string
}

const IconItem = (props: Icon) => {
  const { title, bg, icon, url } = props
  return (
    <Link href={url}>
      <a className={styles.link}>
        <Center bg={bg} className={styles.Center}>
          <Icon as={icon} w={5} h={5} color="white" />
          <Text fontSize="lg" color="white" pl={1}>
            {title}
          </Text>
        </Center>
      </a>
    </Link>
  )
}
