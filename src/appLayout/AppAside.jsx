import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const  AppAside = () => {
  return (
    <React.Fragment>
      <VStack h="100%" w="300px" bg="green.200" style={{minWidth:"250px", maxWidth:"250px"}}>
        <Text> Hola desde Aside</Text>
      </VStack>
    </React.Fragment>
  )
}

export default AppAside
