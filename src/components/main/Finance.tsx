"use client";

import { Flex, Text, Icon, Stack, Button, useToast } from "@chakra-ui/react";
import { useStore } from "../../stores/stepStore";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Warning from "./Warning";
import RessourcesCenter from "./RessourcesCenter";

export default function Finance() {
  const store = useStore();
  const toast = useToast();

  const questions = [
    "Do you and the other party agree on how to devide up property and handle money issues?",
    "The devision of assets?",
    "The division of debts?",
    "Financial support for you?",
  ];
  const question = "Do you have any property or assets to divide with the other party?";
  const [finance, setFinance] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [answeredIndex, setAnsweredIndex] = useState<number | null>(null);

  const currentStep = useStore((state) => state.currentStep);
  const eligibilityAnswers = useStore((state) => state.eligibilityAnswers);

  const handleFirstButtonClick = (answer: boolean) => {
    store.setEligibilityAnswer(question, answer);
    if (answeredQuestions.length < questions.length && answer === true) {
      setAnsweredQuestions([...answeredQuestions, answeredQuestions.length]);
    }
    toast({
      title: answer ? "Yes" : "No",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: answer ? "top-left" : "top-right",
    });
  };

  const handleButtonClick = (answer: boolean) => {
    store.setEligibilityAnswer(questions[answeredQuestions.length], answer);

    // Check if there are more questions available
    if (answeredQuestions.length < questions.length) {
      setAnsweredQuestions([...answeredQuestions, answeredQuestions.length]);
    }

    // Display a toast based on the answer
    toast({
      title: answer ? "Yes" : "No",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: answer ? "top-left" : "top-right",
    });

    if (answeredIndex !== questions.length - 1) {
      setAnsweredIndex((prevIndex) =>
        prevIndex !== null ? prevIndex + 1 : null
      );
    }
  };
  useEffect(() => {
    currentStep >= 1 ? setFinance(true) : setFinance(false);
  }, [currentStep]);

  return (
    <Flex
      width="90%"
      bg="white"
      px={4}
      direction="column"
      roundedBottom="lg"
      roundedTop={{ base: "lg", lg: finance ? "0px" : "lg" }}
    >
      {finance && (
        <Flex direction="column" gap={1}>
          <Flex
            py={3}
            width="100%"
            direction="column"
            alignItems="start"
            gap={4}
            hideFrom="lg"
          >
            <Flex justifyContent="space-between" width="100%">
              <Text fontSize="2xl" fontWeight="bold" color="gray.600">
                Finances
              </Text>
              <Icon as={IoIosArrowUp} boxSize={6} color="teal.600" />
            </Flex>
            <Text fontSize="sm" fontWeight="bold">
              Are you seeking financial support?
            </Text>
            <Warning bgColor="yellow.50" borderColor="yellow.300" />
            <Stack spacing={4} direction="row" align="center">
              <Button
                onClick={() => handleButtonClick(true)} // Pass true for "Yes"
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
                onClick={() => handleButtonClick(false)} // Pass false for "No"
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

          <Flex
            py={3}
            width="100%"
            direction="row"
            alignItems="start"
            gap={4}
            hideBelow="md"
          >
            <Flex direction="column" gap={8}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="gray.600"
                borderBottom="1px"
                borderColor="gray.400"
                py={3}
              >
                Finance
              </Text>
              <Flex>
                <Flex direction="column" gap={8}>
                  <Flex direction="column" gap={1}>
                    <Text fontSize="sm" fontWeight="bold">
                      {question}
                    </Text>
                    <Warning bgColor="yellow.50" borderColor="yellow.300" />
                  </Flex>
                  <Stack spacing={4} direction="row" align="center">
                    <Button
                      onClick={() => handleFirstButtonClick(true)} // Pass true for "Yes"
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
                      onClick={() => handleFirstButtonClick(false)} // Pass false for "No"
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
                </Flex>
                {eligibilityAnswers[question] === true && (
                  <Icon as={IoIosArrowDown} boxSize={6} color="teal.600" />
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex px={20}>
            {eligibilityAnswers[question] === true ? (
              <Flex
                direction="column"
                border={answeredQuestions.length ? "2px" : "0"}
                borderColor="gray.400"
                p={8}
                rounded="lg"
              >
                {answeredQuestions.map((index) => (
                  <Flex direction="column" key={index}>
                    {index === 1 && (
                      <Text fontWeight="bold">
                        Dp you and the other party have agreement on some areas
                        as:
                      </Text>
                    )}
                    <Flex
                      key={index}
                      py={3}
                      width="100%"
                      direction="column"
                      alignItems="start"
                      gap={6}
                    >
                      <Flex direction="column" gap={1}>
                        <Text fontSize="sm" fontWeight="bold">
                          {questions[index]}
                        </Text>
                        {index === 0 && (
                          <Warning
                            bgColor="yellow.50"
                            borderColor="yellow.300"
                          />
                        )}
                      </Flex>
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
                    </Flex>
                  </Flex>                 
                ))}
              </Flex>
            ) : null}
            
          </Flex>
          <RessourcesCenter />
        </Flex>
      )}
    </Flex>
  );
}
