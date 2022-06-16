import { Text, VStack, Box, Button } from '@chakra-ui/react'
import React from 'react'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const AppSideBar = () => {

    const [size, setSize] = React.useState(250)
    const [iconName, setIconName] = React.useState(FaArrowLeft)

    const togglePanel = () => {
        setSize(size === 50 ? 250 : 50)
        setIconName(size === 50 ? FaArrowLeft : FaArrowRight)
    }
  return (
    <React.Fragment>
        <VStack h="100%" w={size + "px"} bg="green.500" style={{minWidth: size + "px", maxWidth: size + "250px"}}>
            <Box w="100%" h="40px" align={'end'} bgColor="blue.100" p={1}>
                <Button onClick={togglePanel} leftIcon={iconName} size="sm"></Button>
            </Box>
            <Text> Hola desde SideBar o Menu</Text>
        </VStack>
    </React.Fragment>
  )
}

export default AppSideBar