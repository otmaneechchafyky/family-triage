"use client";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { BiBookAlt } from "react-icons/bi";

export default function Request(props: any) {
  return (
    <Flex direction="column" color='gray.700'>
      <Flex direction={{base: "column", lg: "row"}} gap="3" alignItems={{lg: "center"}}>
        <Icon as={BiBookAlt} color='gray.800' boxSize={7}/>
        <Text fontSize="2xl" fontWeight="bold">{props.title}</Text>
      </Flex>
      <Text fontSize="sm" ml={{lg: "2.5rem"}}>{props.content}</Text>
    </Flex>
  );
}
