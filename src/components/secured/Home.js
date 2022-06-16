import React from 'react'
import { Heading, VStack } from "@chakra-ui/layout";
import StudentsList from './StudentsList';
import authService from '../../services/auth-service';
import { Navigate } from 'react-router-dom';

function Home() {

  const isUserLogged = authService.isLogged();

  if (!isUserLogged) return <Navigate to="/signin"/>

  return (
    <React.Fragment>
      <VStack w="100%" h="100%">
        <Heading p={4} mb="8" fontWeight="bold" size="1xl">
          HELLO AGAIN!
        </Heading>
        <StudentsList/>
      </VStack>
    </React.Fragment>
  )
}

export default Home
