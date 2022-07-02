import { Table, Text, VStack, Badge, Flex, Box, TableContainer, Tbody, Tfoot, Th, Thead, Tr, Button, Td, Heading, ButtonGroup, Avatar, HStack, TableCaption, IconButton, useToast, useDisclosure} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import studentService from '../../services/student-service';
import SubmitModal from './../SubmitModal';
import AlertDelete from '../AlertDelete';
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { EditIcon, SmallAddIcon, SmallCloseIcon } from '@chakra-ui/icons'
import * as Yup from "yup";

function StudentsList() {

    const [students, setStudents] = useState([]);
    const toast = useToast();

    const [refreshServer, setRefreshServer] = useState(false);

    const initialValues = {
      name:'',
      email:'',
      birthDate:'',
      phoneNumber:'',
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

    const rows = students.map((s, i) => (
        <Tr key={i}>
          <Td>{s.name}</Td>
          <Td>{s.birthDate}</Td>
          <Td>{s.email}</Td>
          <Td isNumeric>{s.phoneNumber}</Td>
          <Td>
            {s.subjects == "" ? "Add" :
              <Badge variant='solid' colorScheme='pink'>
                {s.subjects[i].name} 
                <IconButton ml={1} variant="ghost" size={2} icon={<SmallCloseIcon/>} />
              </Badge>
            }
            <IconButton ml={1} variant='outline' colorScheme='teal' size={2} icon={<SmallAddIcon/>} />
          </Td>
          <Td>
            <ButtonGroup>
              <Button colorScheme="blue" size='sm'><EditIcon/></Button>
              <AlertDelete objectId={s.id} refreshHandler = {setRefreshServer}/>
              {/* <Button colorScheme="green" size='sm'><PlusSquareIcon/></Button> */}
            </ButtonGroup>
          </Td>
        </Tr>
    ));

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
                        {rows}
                    </Tbody>
                </Table>
            </TableContainer>
            <SubmitModal 
              modalTitle="Add student" 
              initialValues = {initialValues}
              validationSchema = {validationSchema}
              onSubmit = {onSubmit}
            />
          </VStack>
      </VStack>
    </React.Fragment>
  )
}

export default StudentsList
