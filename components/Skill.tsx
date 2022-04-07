import { Box, Flex, Heading, Badge } from '@chakra-ui/react'

import styles from './skill.module.css'

import { Program, Certification } from './data/SkillData'

export const Skill = () => {
  return (
    <Flex align="center">
      <Box width="50%" pl={10}>
        <Heading textAlign="center" mb={2}>
          Skill
        </Heading>
        <Box display="flex" justifyContent="center">
          {Program.map((data, i) => (
            <Badge key={i} className={styles.badge} m={1}>
              {data}
            </Badge>
          ))}
        </Box>
      </Box>
      <Box width="50%" pr={10}>
        <Heading textAlign="center" mb={2}>
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
