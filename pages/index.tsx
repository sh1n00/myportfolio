import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Box, chakra } from '@chakra-ui/react'

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyle from '../styles/utils.module.css'
import { Profile } from '../components/Profile'

const Home: NextPage = () => {
  return (
    <Layout>
      <Profile></Profile>
      <Box>aaa</Box>;
    </Layout>
  )
}

export default Home
