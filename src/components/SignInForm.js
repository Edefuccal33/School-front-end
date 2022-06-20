import React, {useState} from 'react'
import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { Icon, InputRightElement, InputGroup, useToast } from '@chakra-ui/react';
import authService from '../services/auth-service';
import { useNavigate  } from "react-router-dom";

function SignInForm() {

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const toast = useToast()
  const nav = useNavigate();

  const initialValues = {
    email:'',
    password:'',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .required("Required")
  })

  const onSubmit = async (values) => {
    await authService.login(values.email,values.password)
    .then(() => {
        toast({
          title: `Loggin confirmation`,
          description: 'Great! Redirecting to home',
          status: 'success',
          duration: 1200,
          isClosable: true,
        })
        console.log("si desaparezco se actualizó la página.")
        setTimeout(() => nav("/home"), 1000);
      },
      () => {
          toast({
            title: 'Ups! Seems like credentials are wrong!',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      }
    );
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
            justifyContent="start"
            mt='50px'
            onSubmit={formik.handleSubmit}
          >
            <Heading pb={4}>Sign In</Heading>

            <TextField name="email" placeholder="Enter email" type="email" autoFocus/>

            <InputGroup>
              <TextField
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
              />

              <InputRightElement w="3rem" h='3rem'>
                <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button type="submit" variant="outline" colorScheme="teal" disabled={!formik.isValid}>
              Enter
            </Button>
          </VStack>
        )}
      </Formik>
    </VStack>
  )
}

export default SignInForm

