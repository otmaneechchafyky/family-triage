"use client";

import { Flex, Text, Stack } from "@chakra-ui/react";
import ChatBotButton from "../buttons/ChatBotButton";
import { QuestionOutlineIcon } from '@chakra-ui/icons'

export default function RessourcesCenter() {
  return (
    <Flex direction={{base: "column", lg: "row"}} alignItems="start" gap={2} py={{base: 0, lg: 6}} width="90%" bg="white" px={{base: 0, lg: 4}}>
          <Stack direction={{base: "column", lg: "row"}}  alignItems="start">
            <Stack gap={2} direction="row" alignItems="center">
              <QuestionOutlineIcon color="yellow.400" boxSize={5}/>
              <Text color={{base: "yellow.400", lg: "black"}} fontSize={{base: "md", lg: "sm"}}> Need help?</Text>
            </Stack>
            <Text fontSize="sm">
              Contact the{" "}
              <span style={{ textDecoration: "underline" }}>
                Washoe Ressources Center
              </span>{" "}
              or use the chatBot bellow.
            </Text>
          </Stack>
          <ChatBotButton value="ChatBot" />
        </Flex>
  );
}
