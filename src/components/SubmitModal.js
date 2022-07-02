import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody} from '@chakra-ui/react';
import ModalForm from './ModalForm';

function SubmitModal(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const overlay = (
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(10deg)'
      />
    )
    
    return (
      <> 
        <Button mt={4} variant="outline" colorScheme='teal' w="130px" onClick={onOpen}>{props.modalTitle}</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          {overlay}
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <ModalForm 
                modalTitle={props.modalTitle} 
                onClose={onClose}
                initialValues = {props.initialValues}
                validationSchema = {props.validationSchema}
                onSubmit = {props.onSubmit}
                />            
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default SubmitModal