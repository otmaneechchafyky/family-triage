"use client";

import { Flex, Text, Icon, Stack, Button, useToast } from "@chakra-ui/react";
import { useStore } from "../../stores/stepStore";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Warning from "./Warning";
import RessourcesCenter from "./RessourcesCenter";

export default function Eligibility() {
  const store = useStore();
  const toast = useToast();

  const question =
    "Have you or your spouse lived in Nevada for at least the past six weeks?";
  const [eligibility, setEligibility] = useState(false);

  const eligibilityAnswers = useStore((state) => state.eligibilityAnswers);
  const currentStep = useStore((state) => state.currentStep);

  useEffect(() => {
    currentStep > 0 ? setEligibility(true) : setEligibility(false);
  }, [currentStep]);

  const handleButtonClick = (answer: boolean) => {
    store.setEligibilityAnswer(question, answer);
    toast({
      title: answer ? "Yes" : "No",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: answer ? "top-left" : "top-right",
    });
  };

  return (
    <Flex
      width="90%"
      bg="white"
      px={4}
      direction="column"
      roundedTop="lg"
      roundedBottom={{ base: "lg", lg: eligibility ? "0px" : "lg" }}
    >
      {eligibility ? (
        <Flex
          py={3}
          borderBottom="1px"
          borderColor="gray.400"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="2xl" fontWeight="bold" color="gray.600">
            Eligibility
          </Text>{" "}
          <Icon as={IoIosArrowDown} boxSize={6} color="teal.600" />
        </Flex>
      ) : (
        <Flex
          py={{ base: 0, lg: 4 }}
          pt={4}
          width="100%"
          direction="column"
          alignItems="start"
          gap={{ base: 28, lg: 32 }}
        >
          <Flex direction="column" gap={3}>
            <Flex>
              <Text fontSize="2xl" fontWeight="bold" color="gray.600">
                Eligibility
              </Text>
            </Flex>
            <Text fontSize="sm" fontWeight="bold">
              {question}
            </Text>
            <Warning bgColor="yellow.50" borderColor="yellow.300" />
            <Stack spacing={4} direction="row" align="center">
              <Button
                onClick={() => handleButtonClick(true)}
                border="2px"
                borderColor="teal.400"
                bg="transparent"
                px="3rem"
                color="teal.400"
                fontSize="sm"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleButtonClick(false)}
                border="2px"
                borderColor="teal.400"
                bg="transparent"
                px="3rem"
                color="teal.400"
                fontSize="sm"
              >
                No
              </Button>
            </Stack>
            {eligibilityAnswers[question] === false && (
              <Warning bgColor="red.50" borderColor="red.300" />
            )}
          </Flex>
          <RessourcesCenter />
        </Flex>
      )}
    </Flex>
  );
}
