import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    useToast,
    Icon,
  } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import studentService from '../services/student-service';
import { DeleteIcon } from '@chakra-ui/icons'

function AlertDelete(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const nav = useNavigate();

    const onDelete = async () => {
      await studentService.deleteStudent(props.objectId)
        .then(() => {
          toast({
            title: `Delete confirmation`,
            description: 'Student is now deleted',
            status: 'success',
            duration: 1200,
            isClosable: true,
          })
          console.log("si desaparezco se actualizó la página.")
          onClose();
          props.refreshHandler(true);
        },
        () => {
            toast({
              title: 'Ups! Seems like something went wrong!',
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
        }
      );
    }
  
    return (
      <>
        <Button colorScheme="red" onClick={onOpen} size='sm'>
          <DeleteIcon/>
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete 
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

export default AlertDelete;