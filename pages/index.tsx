import type { NextPage } from 'next'

import Layout from '../components/Layout'
import { Profile } from '../components/Profile'
import { Career } from '../components/Career'
import { CareerData } from '../components/data'

const Home: NextPage = () => {
  return (
    <Layout>
      <Profile></Profile>
      <Career careers={CareerData} />
    </Layout>
  )
}

export default Home
