import { Box, Flex, Heading, Badge } from '@chakra-ui/react'

import styles from './skill.module.css'

import { Lang, Tool, Certification } from './data/SkillData'

export const Skill = () => {
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
