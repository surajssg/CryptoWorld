import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h="vh" justifyContent={"center"}>
        <box transform={"scale(5)"}>
            <Spinner size={"xl"}/>
        </box>
    </VStack>
  )
}

export default Loader