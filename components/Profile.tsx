import Image from 'next/image'
import Link from 'next/link'
import { FaGithubSquare, FaTwitterSquare, FaBlogger } from 'react-icons/fa'
import { Stack, Icon, Text, Center, Box, Square } from '@chakra-ui/react'

import styles from './profile.module.css'
import utilStyles from '../styles/utils.module.css'

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
        <Link href="https://github.com/namekosiru">
          <a className={styles.link}>
            <Center bg="#333" className={styles.Center}>
              <Icon as={FaGithubSquare} w={5} h={5} color="white" />
              <Text fontSize="lg" color="white" pl={1}>
                Github
              </Text>
            </Center>
          </a>
        </Link>
        <Link href="https://twitter.com/Shinori0425">
          <a className={styles.link}>
            <Center bg="#00ACEE" className={styles.Center}>
              <Icon as={FaTwitterSquare} w={5} h={5} color="white" />
              <Text fontSize="lg" color="white" pl={1}>
                Twitter
              </Text>
            </Center>
          </a>
        </Link>
        <Link href="https://namekosiru.hatenablog.com/">
          <a className={styles.link}>
            <Center bg="#6cc644" className={styles.Center}>
              <Icon as={FaBlogger} w={5} h={5} color="white" />
              <Text fontSize="lg" color="white" pl={1}>
                Blog
              </Text>
            </Center>
          </a>
        </Link>
      </Stack>
    </Box>
  )
}
