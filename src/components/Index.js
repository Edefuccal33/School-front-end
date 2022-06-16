import { Heading, VStack, List, ListItem, ListIcon, Spacer, Text } from '@chakra-ui/react'
import { MdCheckCircle } from "react-icons/md";
import React from 'react'

const Index = () => {
  return (
    <React.Fragment>
      <VStack w="100%" h="100%">
          <Heading p={4} mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, pink.500, pink.300, blue.500)" bgClip="text">
              School Application
          </Heading>
          <VStack w="100%" h="150px" p={4}>
            <List spacing={3} fontWeight="hairline">
              <Text fontWeight="semibold">Features:</Text>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Basic CRUD operations (with "soft deleting") on Teachers, Subjects and Students.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                "ManyToMany" relationship between Students & Subjects.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                "OneToMany" relationship between Teachers & Subject.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Assign and remove teachers and students from subjects.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Spring Security - JWT Tokens.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Email sender.
              </ListItem>
             </List>
          </VStack>
        </VStack>
    </React.Fragment>
  )
}

export default Index
