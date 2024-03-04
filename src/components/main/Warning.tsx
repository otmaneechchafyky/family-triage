"use client";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Warning(props: any) {
  return (
    <Flex p="4" direction="column" bg={props.bgColor} border="2px" borderColor={props.borderColor} rounded=".5rem">
      <Icon as={RiErrorWarningFill} color={props.borderColor} width="15px" height="15px"/>
      <Text fontSize="sm" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
        consequuntur maiores consectetur quam quaerat ducimus suscipit sapiente
        at, molestias architecto laboriosam est minus.
      </Text>
    </Flex>
  );
}
