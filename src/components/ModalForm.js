import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useToast } from '@chakra-ui/react';
import authService from '../services/auth-service';
import studentService from '../services/student-service';

function ModalForm(props) {


  const toast = useToast()

  const initialValues = {
    name:'',
    email:'',
    birthDate:'',
    phoneNumber:''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(2, "Name is too short"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .min(11, "Email is too short"),
    birthDate: Yup.date()
      .required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
  })

  const onSubmit = async (values, {resetForm}) => {
      
      studentService.createStudent(values.name, values.email, values.birthDate, values.phoneNumber)
      .then(() => {
          toast({
            title: `Success!`,
            description: 'Student created',
            status: 'success',
            isClosable: true,   
          })
        //   setTimeout(() => window.location.replace('/signin'), 2000);
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
            // h="100vh"
            mt='50px'
            justifyContent="start"
            onSubmit={formik.handleSubmit}
          >
            <Heading pb={4} size="lg">{props.modalTitle}</Heading>

            <TextField 
                name="name" 
                placeholder="Enter first name" 
                type="text" 
                value={formik.values.name}
                autoFocus 
            />

            <TextField
                name="email"
                type="email"
                placeholder="Enter email"
                value={formik.values.email}
            />

            <TextField
                name="birthDate"
                type="date"
                placeholder="Enter birth date"
                value={formik.values.birthDate}
            />

            <TextField
                name="phoneNumber"
                type="text"
                placeholder="Enter phone number"
                value={formik.values.phoneNumber}
            />

            <Button type="submit" variant="outline" colorScheme="teal" disabled={!formik.isValid}>
              Save
            </Button>

          </VStack>
        )}
      </Formik>
    </VStack>
  )
}

export default ModalForm

