"use client";

import { Button, Icon, Text } from "@chakra-ui/react";
import { SlMenu } from "react-icons/sl";

export default function ChatBotButton(props: any) {
  return (
    <Button colorScheme="transparent" size="sm" p="6" width="80%" borderWidth="2px" borderColor="yellow.400" gap="4" hideFrom='lg'>
        <Icon boxSize={5} as={SlMenu} color="gray.800"/>
        <Text fontSize="lg" color="gray.700" fontWeight="bold">{props.value}</Text>
    </Button>
  );
}
