import { SmallAddIcon } from '@chakra-ui/icons';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Checkbox,
    Portal,
    IconButton,
    Stack,
    Button,
    Text,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import subjectService from '../services/subject-service';

  function SubjectsPopover(props) {

    const [subjects, setSubjects] = useState([]);
    const [noSubjects, setNoSubjects] = useState(false);

    const removeSubjectsId = props.enrolledSubjectsId;

    useEffect(() => {
        subjectService.getAll()
          .then((response) => setSubjects(response.data))
          .catch(() => subjects([]))
    }, []);

    const checkBoxSubjects = subjects.map((s) => (
      s.id !== removeSubjectsId ? 
        <Checkbox key={s.id}>
            {s.name}
        </Checkbox>
        :
        <Text key={1} color='tomato' as='em' >Create more subjects to enroll</Text>
      )
    );
    

    return (
        <Popover>
            <PopoverTrigger>
                <IconButton ml={1} variant='outline' colorScheme='teal' size={2} icon={<SmallAddIcon/>}/>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Click on subjects to enroll</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Stack spacing={5} direction='row'>
                            {checkBoxSubjects}
                        </Stack>
                    </PopoverBody>
                    <PopoverFooter>
                        <Button 
                            alignSelf="center" 
                            type="submit"
                            variant="outline" 
                            colorScheme="teal"
                            size="sm" 
                            // disabled={!formik.isValid}
                            // onClick={props.onClose} 
                            >
                            {noSubjects ? "Save" : "Create Subject"}
                        </Button>
                    </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover> 
    )
  }

  export default SubjectsPopover;