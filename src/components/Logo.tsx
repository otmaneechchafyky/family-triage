"use client";

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import legalhelp from "../../public/images/legalhelp.png";

export default function Logo() {
  return (
    <Flex w="7rem" justifyContent="space-between" p="1">
      <Image src={legalhelp} width={45} height={45} alt="Logo"></Image>
      <Flex direction="column" color="green.500" fontWeight="bold">
        <Text fontSize="1xl">Family</Text>
        <Text fontSize="1xl">Triage</Text>
      </Flex>
    </Flex>
  );
}
