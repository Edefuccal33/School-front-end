import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, Stack, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import studentService from '../../services/student-service';

function StudentsList() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        studentService.getAll()
          .then((response) => setStudents(response.data))
          .catch(() => setStudents([]))
      }, []);

    const rows = students.map((s, i) => (
        <tr key={i}>
          <td>{s.birthDate}</td>
          <td>{s.email}</td>
          <td>{s.name}</td>
          <td>{s.phoneNumber}</td>
        </tr>
    ));

  return (
    <React.Fragment>
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                      <Th>birth date</Th>
                      <Th>email</Th>
                      <Th>name</Th>
                      <Th>phone number</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    {rows}
                </Tbody>
            </Table>
            <Button mt={4}  colorScheme='teal' size='sm'>
              Add student
            </Button>
        </TableContainer>
    </React.Fragment>
  )
}

export default StudentsList
