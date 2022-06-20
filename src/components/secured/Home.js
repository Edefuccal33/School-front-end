import React from 'react'
import { Heading, VStack } from "@chakra-ui/layout";
import StudentsList from './StudentsList';
import authService from '../../services/auth-service';
import { Navigate, Link } from 'react-router-dom';
import TeachersList from './TeachersList';
import { ButtonGroup, Stack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';

function Home() {

  const isUserLogged = authService.isLogged();

  if (!isUserLogged) return <Navigate to="/signin"/>

  const user = authService.getCurrentUser();

  return (
    <React.Fragment>
      <VStack w="100%" h="100%">
        
        <Heading p={4} mb={6} fontWeight="semibold" size="lg">
          USER - {user.email}
        </Heading>

        <Stack direction='column' w="100%">
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            py={12}
            bgImage="url('https://bit.ly/2Z4KKcF')"
            bgPosition='center'
            bgRepeat='no-repeat'
            mb={2}
          >
            <ButtonGroup gap='4'>
              <Link to="/students">
                <Button colorScheme='pink' >View Students</Button>
              </Link>
              <Link to="/teachers">
                <Button colorScheme='orange'>View Teachers</Button>
              </Link>
            </ButtonGroup>  
          </Box>
        </Stack>

      </VStack>
    </React.Fragment>
  )
}

export default Home
