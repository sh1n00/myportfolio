import { FC } from 'react'
import Link from 'next/link'
import {
  Text,
  Box,
  Circle,
  OrderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import styles from './career.module.css'

type Careers = {
  careers: Array<Career>
}

type Career = {
  title: string
  date: string
  content: string
  url: string
}

export const Career = (props: Careers) => {
  const { careers } = props
  return (
    <Box>
      <Text fontSize="3xl" align="center" pt={20}>
        Career
      </Text>
      <Box
        className={styles.timeline}
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <OrderedList className={styles.list}>
          {careers.map((career, i) => (
            <CareerItem
              key={i}
              title={career.title}
              date={career.date}
              content={career.content}
              url={career.url}
            />
          ))}
        </OrderedList>
      </Box>
    </Box>
  )
}

const CareerItem = (props: Career) => {
  const { title, date, content, url } = props
  return (
    <ListItem className={styles.item}>
      <Box className={styles.date}>{date}</Box>
      <Box className={styles.content}>
        <Link href={url}>
          <a>
            <Heading
              as={motion.div}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              transition="0.05s linear"
              size="lg"
              className={styles.heading}
            >
              {title}
            </Heading>
          </a>
        </Link>
        <Text>{content}</Text>
      </Box>
    </ListItem>
  )
}
