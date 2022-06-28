import React from 'react'
import { Heading, VStack } from "@chakra-ui/layout";
import authService from '../../services/auth-service';
import { Navigate, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

function Home() {

  const isUserLogged = authService.isLogged();

  if (!isUserLogged) return <Navigate to="/signin"/>

  const user = authService.getCurrentUser();

  return (
    <React.Fragment>
      <VStack w="100%" h="100%">
        
        <Heading p={4} mb={6} fontWeight="semibold" size="lg">
          USER: {user.email}
        </Heading>

        <VStack w="400px" h="50%">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='2' textAlign='left'>
                    Students
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Teachers
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </VStack>
    </React.Fragment>
  )
}

export default Home
