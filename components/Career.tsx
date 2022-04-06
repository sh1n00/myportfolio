import { FC } from 'react'
import {
  Text,
  Box,
  Circle,
  OrderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react'

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
      <Box className={styles.timeline}>
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
        <Heading size="lg">{title}</Heading>
        <Text>{content}</Text>
      </Box>
    </ListItem>
  )
}
