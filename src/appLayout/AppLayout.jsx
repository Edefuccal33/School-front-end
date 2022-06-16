import React from 'react';
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import AppAside from "./AppAside";
import AppFooter from "./AppFooter";
import { Flex, Box} from "@chakra-ui/react";

function AppLayout() {
  return (
    <React.Fragment>
        <Box w="100%">
            <AppHeader w="100%" h="100px"/>
            <Flex w="100%">
                <AppBody/>
            </Flex>
            <AppFooter/>
        </Box>
    </React.Fragment>
  )
}

export default AppLayout
