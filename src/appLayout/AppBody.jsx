import { HStack } from '@chakra-ui/react'
import React from 'react'
import Index from '../components/Index';
import {Route, Routes} from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import SignInForm from './../components/SignInForm';
import Home from '../components/secured/Home';

const appBody = () => {
  return (
      <React.Fragment>
        <HStack h="calc(100vh - 190px)" w="100%" pt={2} style={{minHeight:"450px", maxHeight:"100%"}}>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/signin" element={<SignInForm/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </HStack>
      </React.Fragment>
  )
}

export default appBody
