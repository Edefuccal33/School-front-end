import { Table, Text, TableCaption, TableContainer, Tbody, Th, Thead, Tr, Stack, Button, Td, Heading} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import teacherService from '../../services/teacher-service';
import SubmitModal from '../SubmitModal';

function TeacherLists() {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        teacherService.getAll()
          .then((response) => setTeachers(response.data))
          .catch(() => setTeachers([]))
      }, []);

    const rows = teachers.map((t, i) => (
        <Tr key={i}>
          <Td>{t.name}</Td>
          <Td>{t.lastModifiedDate}</Td>
        </Tr>
    ));

  return (
    <React.Fragment>
        <TableContainer>
          <Heading mb={4} fontWeight="normal" size="md">List of students</Heading>
            <Table variant='striped' colorScheme='teal'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                      <Th>name</Th>
                      <Th>last modified date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    {rows}
                </Tbody>
            </Table>

            <SubmitModal modalTitle="Add teacher"/>

        </TableContainer>
    </React.Fragment>
  )
}

export default TeacherLists
