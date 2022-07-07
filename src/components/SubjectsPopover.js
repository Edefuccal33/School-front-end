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
import React, { useEffect, useState } from 'react';
import subjectService from '../services/subject-service';

  function SubjectsPopover(props) {

    let subjectsNames = props.allSubjectsNames;

    let noSubjects = false;

    let enrolledSubjects = useState([props.enrolledSubjects]);

    let enrolledSubjectNames = enrolledSubjects[0][0];

    const [isSave, setIsSave] = React.useState(false);   

    // const onChange = (value) => {
    //     console.log(value);
    // }

    const onChange = (e) => {
        // current array of options
        const checkedArray = [];
        let index
    
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to options array
          checkedArray.push(+e.target.value)
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = checkedArray.indexOf(+e.target.value)
          checkedArray.splice(index, 1)
        }
        console.log(checkedArray)
      }

    // subjects = subjects.filter((s) => s.id != enrolledSubjects[0])
    // subjects = subjects.filter((s) => !enrolledSubjects.includes(s.id))
    // subjects = subjects.flatMap((s) => !enrolledSubjects.includes(s))

    // const checkBoxSubjects = subjectsNames.map((s) => (
    //     subjectsNames = enrolledSubjects.filter((e) => e.id !== s.id),
    //     subjectsNames.length > 0 ?
    //     <Checkbox key={s.id}>
    //         {s.name}
    //     </Checkbox>
    //     :
    //     <Text key={s.id} color='tomato' as='em' >Create more subjects to enroll</Text>
    // ));

    
    function displaySubjects() {

            // convertimos los arrays de objetos a arrays de cadenas
    // var aux1 = subjectsNames.map(function(el) { return JSON.stringify(el); });
    // var aux2 = enrolledSubjectNames.map(function(el) { return JSON.stringify(el); });

    // console.log(enrolledSubjects[0][0])

    // añadimos todas las cadenas del primer array que no estén en el segundo
    // var data3 = enrolledSubjectNames.filter(function(el) {
    //     console.log(enrolledSubjectNames)
    //     if (subjectsNames.indexOf(el) < 0) return el;
    // });

    // añadimos todas las cadenas del segundo array que no estén en el primero
    // data3 = data3.concat( aux2.filter(function(el) {
    // if (aux1.indexOf(el) < 0) return el;
    // }));

    // convertimos las cadenas de nuevo a objetos
    // data3 = data3.map(function (el) { return JSON.parse(el); });
    // console.log(data3)
    // console.log(data3);
}

        //     let array = [];
        //     for (let i = 0; i < enrolledSubjects.length; i++) {
        //         for (let j = 0; j < subjects.length; j++) {
        //             if (subjects[j]['id'] != enrolledSubjects[i]['id']){
        //                 array.push(subjects[j].name)
        //                 console.log(array[0])
        //             } // if(data1[i]['id'] == data2[j]['id']
        //         }
        //     }

        //     return (array.map((s) => (
        //         array.length > 0 ?
        //         <Checkbox key={s.id}>
        //             {s.name}
        //         </Checkbox>
        //         :
        //         <Text key={1} color='tomato' as='em' >Create more subjects to enroll</Text>
        //     )))
            
        // }

       

        // if (removeSubjectsId.length > 0){
        //     let array = [];
        //     for (let i = 0; i < removeSubjectsId.length; i++) {
        //         for (let j = 0; j < subjects.length; j++) {
        //             if (subjects[j].id != removeSubjectsId[i]){
        //                 array.push(subjects[j].name)
        //                 console.log(array[0])
        //             }
        //         }
        //     }
        //     if (array.length > 0){
        //         for (let i = 0; i < array.length; i++) {
        //             return (
        //                 <Checkbox key={array[i]} onChange={(e) => onChange(e)} value={array[i]}>
        //                     {array[i]}
        //                 </Checkbox>
        //             )
        //         }
        //     } else {
        //         return (
        //             <Text key={1} color='tomato' as='em' >Create more subjects to enroll</Text>
        //         )
        //     }
        // }



        // for (let i = 0; i < subjects.length; i++) {
        //     for (let j = 0; j < removeSubjectsId.length; j++) {
        //         console.log("id de subject "+ subjects[i].name + " id de subject enrolled del studiante: " + removeSubjectsId[j].id)
        //        if (subjects[i].id === removeSubjectsId[j].id) {
        //         noSubjects = true;
        //             return (
        //                 <Checkbox key={subjects[i].id} onChange={(e) => onChange(e)} value={subjects[i].id}>
        //                     {subjects[i].name}
        //                 </Checkbox>
        //             )
        //        } else {
        //             return (
        //                 <Text key={1} color='tomato' as='em' >Create more subjects to enroll</Text>
        //             )
        //        }
                
        //     }
        // }

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
                           
                            {/* {checkBoxSubjects} */}
                            {displaySubjects()}
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