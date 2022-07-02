import React, { useEffect, useState } from 'react'
import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik } from "formik";
import TextField from "./TextField";
import { FormLabel, useToast, InputGroup } from '@chakra-ui/react';
import CustomSelectField from './CustomSelectField';
import subjectService from '../services/subject-service';

function ModalForm(props) {

  const toast = useToast();

  // const [subjects, setSubjects] = useState([]);

  // const choices = 
  //   subjects.map((s) => (
  //       {key: s.name, value: s.name}
  //     )
  //   );
  
  // useEffect(() => {
  //   subjectService.getAll()
  //     .then((response) => setSubjects(response.data))
  //     .catch(() => subjects([]))
  // }, []);

  return (
    <VStack w="100%" h="100%">
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={props.onSubmit}
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
            alignItems="left"
            onClose={props.onClose}
          >
            <Heading textAlign="center" pb={4} size="lg">{props.modalTitle}</Heading>

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
            <InputGroup alignItems="end">
              {/* <Text w="75%">Enter the birth date</Text> */}
              <FormLabel w="75%" position="relative">Enter the birth date</FormLabel>
              <TextField
                name="birthDate"
                type="date"
                placeholder="Enter birth date"
                value={formik.values.birthDate}
              />
            </InputGroup>

            {/* <CustomSelectField
              name="subjects"
              placeholder="Select a subject"
              options={choices}
              value={formik.values.subjects}
            /> */}

            <TextField
                name="phoneNumber"
                type="text"
                placeholder="Enter phone number"
                value={formik.values.phoneNumber}
            />

            <Button 
              alignSelf="center" 
              type="submit"
              variant="outline" 
              colorScheme="teal" 
              disabled={!formik.isValid}
              onClick={props.onClose} 
            >
              Save
            </Button>

          </VStack>
        )}
      </Formik>
    </VStack>
  )
}

export default ModalForm

