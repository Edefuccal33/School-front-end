import React, { useState } from 'react'
import { IconButton, Button, Spacer, useColorMode, VStack, HStack, Box, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSignInAlt, FaPen, FaSignOutAlt} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth-service';

const AppHeader = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const [InDisabled, setInDisabled] = useState(false);
  const [UpDisabled, setUpDisabled] = useState(false);
  const nav = useNavigate();

  const handleInDisabled = () => {
    setInDisabled(!InDisabled);
    setUpDisabled(false);
  }

  const handleUpDisabled = () => {
    setUpDisabled(!UpDisabled);
    setInDisabled(false);
  }

  const undisable = () => {
    setUpDisabled(false);
    setInDisabled(false);
  }

  const logOut = async () =>{ 
    await authService.logout();
    nav("/signin");
  };

  const isLogged = authService.isLogged();

  return (
    <React.Fragment>
      <VStack w="100%" h="100px">
        <HStack w="100%" h="100%">
          <Box w="150px" h="100%" pt={4} align="center">
            <Link to="/" onClick={undisable}>
              <Image src='data:image/jpeg;base64,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' 
              objectFit='cover'
              rounded="lg" 
              borderRadius="full"
              boxSize='70px'
              />
            </Link>
          </Box>
          <Spacer/>

          {isLogged ?
            <Box w="400px" h="100%" pt={7} pr={4} align="end">
              <Link to="/home">
                  <Button color="pink.500" variant='ghost' leftIcon={<FaSignOutAlt/>} onClick={logOut}>
                      Log out
                  </Button>
              </Link>
            </Box>
            :
            <Box w="400px" h="100%" pt={7} pr={4} align="end">
              <Link to="/signin">
                <Button color="pink.500" variant='ghost' leftIcon={<FaSignInAlt/>} disabled={InDisabled} onClick={handleInDisabled}>
                    Sign in
                </Button>
              </Link>

              <Link to="/signup">
                <Button ml={1} colorScheme='teal' variant='ghost' leftIcon={<FaPen/>} disabled={UpDisabled} onClick={handleUpDisabled}>
                    Sign up
                </Button>
              </Link>
            </Box>
          } 
            <IconButton ml={10} icon={colorMode === 'light' ? <FaMoon/> : <FaSun/>} isRound size="md" onClick={toggleColorMode}/>
        </HStack>
      </VStack>
    </React.Fragment>
  )
}

export default AppHeader
