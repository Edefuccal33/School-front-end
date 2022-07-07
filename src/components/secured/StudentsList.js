import { Table, Text, VStack, Badge, TableContainer, Tbody, Tr,Th, Thead, Button, Td, Heading, ButtonGroup, IconButton, useToast, InputGroup, FormLabel, Portal, Stack, Checkbox, HStack} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import studentService from '../../services/student-service';
import SubmitModal from './../SubmitModal';
import AlertDelete from '../AlertDelete';
import TextField from "../TextField";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

import { EditIcon, SmallAddIcon, SmallCloseIcon } from '@chakra-ui/icons'
import * as Yup from "yup";
import SubjectsPopover from '../SubjectsPopover';
import subjectService from '../../services/subject-service';

function StudentsList() {

    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const toast = useToast();
    const [refreshServer, setRefreshServer] = useState(false);
    const [refreshStudents, setRefreshStudents] = useState(false);

    const initialValues = {
      name:'',
      email:'',
      birthDate:'',
      phoneNumber:'',
    }

    const studentFields = (
      <React.Fragment>
        <TextField 
            name="name" 
            placeholder="Enter first name" 
            type="text" 
            // value={formik.values.name}
            autoFocus 
        />

        <TextField
            name="email"
            type="email"
            placeholder="Enter email"
            // value={formik.values.email}
        />
        <InputGroup alignItems="end">

          <FormLabel w="75%" position="relative">Enter the birth date</FormLabel>
          <TextField
            name="birthDate"
            type="date"
            placeholder="Enter birth date"
            // value={formik.values.birthDate}
          />
        </InputGroup>

        <TextField
            name="phoneNumber"
            type="text"
            placeholder="Enter phone number"
            // value={formik.values.phoneNumber}
        />
      </React.Fragment>
    )

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
          setRefreshServer(true);
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

    useEffect(() => {
      studentService.getAll()
        .then((response) => setStudents(response.data))
        .catch(() => setStudents([]))
      return ()=> setRefreshServer(false);
    }, [refreshServer]);


    // useEffect(() => {
    //   subjectService.getAll()
    //     .then((response) => setSubjects(response.data))
    //     .catch(() => subjects([]))
    //     return ()=> setRefreshStudents(false);
    // }, [refreshStudents]);

    // const fetchSubjects = async () => {
    //   subjectService.getAll()
    //     .then((response) => setSubjects(response.data))
    //     .catch(() => subjects([]))
    // }
    
    // useEffect(() => {fetchSubjects();     }, []);

    const enrollToSubject = () => {

    }

  function displayEnrolledSubjects(array) {
    return (array.map((s) => (
      <Tag
      size="sm"
      key={s.id}
      borderRadius='full'
      variant='solid'
      colorScheme='pink'
      >
        <TagLabel>{s.name}</TagLabel>
        <TagCloseButton />
      </Tag>
    )))
  }

    let contador = 1;

    function rows2() {
      return (students.map((s) => (
        <Tr key={s.id}>
          <Td>{s.name}</Td>
          <Td>{s.birthDate}</Td>
          <Td>{s.email}</Td>
          <Td isNumeric>{s.phoneNumber}</Td>
          <Td>
            {console.log("vuelta: " + contador++)}
            {/* {console.log("all Subjects: " + subjects[1].name)} */}
              {s.subjects == "" ? "Add" : <HStack>{displayEnrolledSubjects(s.subjects)}</HStack>}
              {/* <SubjectsPopover enrolledSubjects={s.subjects == "" ? "" : s.subjects.map((s) => (s.name))} allSubjectsNames={subjects.map((s) => (s.name))}/> */}
          </Td>
          <Td>
            <ButtonGroup>
              <Button colorScheme="blue" size='sm'><EditIcon/></Button>
              <AlertDelete objectId={s.id} refreshHandler = {setRefreshServer}/>
            </ButtonGroup>
          </Td>
        </Tr>
      )))
    }

    // const rows = students.map((s,i) => (
    //     <Tr key={s.id}>
    //       <Td>{s.name}</Td>
    //       <Td>{s.birthDate}</Td>
    //       <Td>{s.email}</Td>
    //       <Td isNumeric>{s.phoneNumber}</Td>
    //       <Td>
    //         {console.log("vuelta: " + contador++)}
    //           {s.subjects == "" ? "Add" : <HStack>{enrolledSubjects(s.subjects)}</HStack>}
    //           <SubjectsPopover enrolledSubjects={s.subjects == "" ? "" : s.subjects.map((s) => (s.name))} allSubjectsNames={subjects.map((s) => (s.name))}/>
    //       </Td>
    //       <Td>
    //         <ButtonGroup>
    //           <Button colorScheme="blue" size='sm'><EditIcon/></Button>
    //           <AlertDelete objectId={s.id} refreshHandler = {setRefreshServer}/>
    //         </ButtonGroup>
    //       </Td>
    //     </Tr>
    // ));

  return (
    <React.Fragment>
      <VStack w="100%" h="100%">
          <Heading p={4} mb={3} fontWeight="semibold" size="lg">
            :)
          </Heading>
          <VStack alignItems="left">
            <Heading mb={4} fontWeight="normal" size="md">List of students</Heading>
            {/* <TableContainer maxH="300px" minH="250px" maxW="800px" overflowY="auto"> */}
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                      <Tr>
                          <Th>name</Th>
                          <Th>birth date</Th>
                          <Th>email</Th>
                          <Th isNumeric>phone number</Th>
                          <Th>subjects</Th>
                          <Th>actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                        {rows2()}
                    </Tbody>
                </Table>
            </TableContainer>
            <SubmitModal 
              modalTitle="Add student" 
              initialValues = {initialValues}
              validationSchema = {validationSchema}
              onSubmit = {onSubmit}
              fields = {studentFields}
            />
          </VStack>
      </VStack>
    </React.Fragment>
  )
}

export default StudentsList
