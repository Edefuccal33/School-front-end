import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { Icon, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import authService from '../services/auth-service';

function SignUpForm() {

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const [showPasswordConfirmation, setPasswordConfirmation] = useState(false);
  const handlePasswordConfirmationVisibility = () => setPasswordConfirmation(!showPasswordConfirmation);
  const toast = useToast()

  const initialValues = {
    email:'',
    password:'',
    passwordConfirmation:''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .min(11, "Email is too short"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short"),
    passwordConfirmation: Yup.string()
      .required("Required")
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')  
  })

  const onSubmit = async (values, {resetForm}) => {
      authService.signup(values.email,values.password)
      .then(() => {
          toast({
            title: `Account created`,
            description: 'Redirecting to Login page',
            status: 'success',
            isClosable: true,
          })
          setTimeout(() => window.location.replace('/signin'), 2000);
        },
        () => {
            toast({
              title: 'Ups!! Something went wrong',
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
        }
      );
      resetForm();
  }

  return (
    <VStack w="100%" h="100%">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <VStack
            as="form"
            mx="auto"
            w={{ base: "90%", md: 400 }}
            h="100vh"
            mt='50px'
            justifyContent="start"
            onSubmit={formik.handleSubmit}
          >
            <Heading pb={4}>Sign Up</Heading>

            <TextField 
                name="email" 
                placeholder="Enter email" 
                type="email" 
                value={formik.values.email}
                autoFocus 
            />

            <InputGroup>
              <TextField
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={formik.values.password}
              />

              <InputRightElement w="3rem" h='3rem' alignSelf="center">
                <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <TextField
                name="passwordConfirmation"
                type={showPasswordConfirmation ? 'text' : 'password'}
                placeholder="Confirm your password"
              />

              <InputRightElement w="3rem" h='3rem'>
                <Button h="1.5rem" size="sm" onClick={handlePasswordConfirmationVisibility}>
                  {showPasswordConfirmation ? <Icon name="view-off" /> : <Icon name="view" />}
                </Button>
              </InputRightElement>

            </InputGroup>

            <Button type="submit" variant="outline" colorScheme="teal" disabled={!formik.isValid}>
              Create account
            </Button>

          </VStack>
        )}
      </Formik>
    </VStack>
  )
}

export default SignUpForm

