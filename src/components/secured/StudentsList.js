import { Table, Text, VStack, Badge, Flex, Box, TableContainer, Tbody, Th, Thead, Tr, Button, Td, Heading, ButtonGroup, Avatar, HStack, TableCaption} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import studentService from '../../services/student-service';
import SubmitModal from './../SubmitModal';
import AlertDelete from '../AlertDelete';


function StudentsList() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
      studentService.getAll()
        .then((response) => setStudents(response.data))
        .catch(() => setStudents([]))
    }, [students]);
  
    const rows = students.map((s, i) => (
        <Tr key={i}>
          <Td>{s.name}</Td>
          <Td>{s.birthDate}</Td>
          <Td>{s.email}</Td>
          <Td isNumeric>{s.phoneNumber}</Td>
          <Td>
            <Badge variant='solid' colorScheme='pink'>
              {s.subjects == "" ? "" : s.subjects[i].name}
            </Badge>
          </Td>
          <Td>
            <ButtonGroup>
              <Button size='sm'>Editar</Button>
              <AlertDelete/>
            </ButtonGroup>
          </Td>
        </Tr>
    ));

  return (
    <React.Fragment>
      <VStack w="100%" h="100%">
          <Heading p={4} mb={6} fontWeight="semibold" size="lg">
            :)
          </Heading>
          <VStack alignItems="left">
            <Heading mb={4} fontWeight="normal" size="md">List of students</Heading>
            <TableContainer maxH="300px" overflowY="auto">
                <Table variant='striped' colorScheme='teal'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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
            <SubmitModal modalTitle="Add student" maxW={5}/>
          </VStack>
      </VStack>
    </React.Fragment>
  )
}

export default StudentsList
