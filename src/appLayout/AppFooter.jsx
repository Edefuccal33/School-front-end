import React from 'react'
import { HStack, IconButton,Text, VStack } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaLinkedinIn} from 'react-icons/fa';
import authService from '../services/auth-service';

const AppFooter = () => {
  let year = new Date().getFullYear();
  const user = authService.getCurrentUser();

  return (
    <React.Fragment>
        <VStack w="100%" h="60px">
            <HStack w="100%"  spacing={4} justify="center" pt={3}>
                <IconButton icon={<FaFacebookF/>} isRound size="sm" colorScheme='facebook'/>
                <IconButton icon={<FaTwitter/>} isRound size="sm" colorScheme='twitter'/>
                <IconButton icon={<FaTelegramPlane/>} isRound size="sm" colorScheme='telegram'/>
                <IconButton icon={<FaLinkedinIn/>} isRound size="sm" colorScheme='linkedin'/>
            </HStack>
            <HStack w="100%" justify="center" pb={2}>
                <Text>{year} - All rights reserved {user ? "- USER: " + user.email : ""}</Text>
            </HStack>
        </VStack>
    </React.Fragment>
  )
}

export default AppFooter
