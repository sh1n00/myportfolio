import useMedia from 'use-media'
import { Box, Flex, Heading, Badge } from '@chakra-ui/react'

import styles from './skill.module.css'

import { Lang, Tool, Certification } from './data/SkillData'

export const Skill = () => {
  const isWide = useMedia({ minWidth: '768px' })
  return <>{isWide ? <PcWindow /> : <SpWindow />}</>
}

export const SpWindow = () => {
  return (
    <Box>
      <Heading size="lg" textAlign="center" mb={2}>
        Lang
      </Heading>
      <Box justifyContent="center">
        {Lang.map((data, i) => (
          <Badge key={i} className={styles.badge} m={1}>
            {data}
          </Badge>
        ))}
      </Box>

      <Heading size="lg" textAlign="center" mb={2}>
        Tool
      </Heading>
      <Box justifyContent="center">
        {Tool.map((data, i) => (
          <Badge key={i} className={styles.badge} m={1}>
            {data}
          </Badge>
        ))}
      </Box>

      <Box>
        <Heading size="lg" textAlign="center" mb={2}>
          Certification
        </Heading>
        <Box justifyContent="center">
          {Certification.map((data, i) => (
            <Badge key={i} className={styles.badge} m={1}>
              {data}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export const PcWindow = () => {
  return (
    <Flex>
      <Box display="block" justifyContent="center" width="50%" pl={10}>
        <Heading size="lg" textAlign="center" mb={2}>
          Lang
        </Heading>
        <Box display="flex" justifyContent="center">
          {Lang.map((data, i) => (
            <Badge key={i} className={styles.badge} m={1}>
              {data}
            </Badge>
          ))}
        </Box>
        <Heading size="lg" textAlign="center" mt={2} mb={2}>
          Tool
        </Heading>
        <Box display="flex" justifyContent="center">
          {Tool.map((data, i) => (
            <Badge key={i} className={styles.badge} m={1}>
              {data}
            </Badge>
          ))}
        </Box>
      </Box>
      <Box display="block" width="50%" pr={10}>
        <Heading size="lg" textAlign="center" mb={2}>
          Certification
        </Heading>
        <Box display="flex" justifyContent="center">
          {Certification.map((data, i) => (
            <Badge key={i} className={styles.badge} m={1}>
              {data}
            </Badge>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}
