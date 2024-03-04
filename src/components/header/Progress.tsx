"use client";

import { useStore } from '../../stores/stepStore';
import { Box, Flex, Text } from '@chakra-ui/react';

const steps = ['Eligibility', 'Finance', 'Assets', 'Children', 'Harm'];

const ProgressIndicator = () => {
    const [currentStep, setCurrentStep] = useStore((state) => [state.currentStep, state.setCurrentStep]);
  
    const handleClick = (index: number) => {
      setCurrentStep(index);
    };
  
    return (
      <Flex flexDirection="column"  gap={1} position="relative">
        <Box mt={4} bg="gray.200" height="0.5rem" borderRadius="full" width="100%" position="absolute" left={{base: "0", lg: "-2rem"}} top="-4px">
          <Box
            bg="teal.500"
            height="100%"
            width={{
                base: currentStep === 0 || currentStep === 1
                  ? `${(currentStep / (steps.length - 1)) * 100 + 10}%`
                  : `${(currentStep / (steps.length - 1)) * 100}%`,
                lg: currentStep === 0 || currentStep === 1 || currentStep === 2
                ? `${(currentStep / (steps.length - 1)) * 100 + 9.5}%`
                : `${(currentStep / (steps.length - 1)) * 100 + 3}%`,
              }}
            borderRadius="full"
            transition="width 0.3s"
          />
        </Box>
        <Flex alignItems="center" gap={{base: "5", lg: "20"}} zIndex="1">
          {steps.map((step, index) => (
            <Flex key={index} direction="column" alignItems="center" position="relative">
              <Box
                as="button"
                onClick={() => handleClick(index)}
                bg={index === currentStep ? 'teal.500': 'white'}
                border="4px"
                borderColor={index <= currentStep ? 'teal.500': 'gray.200'}
                borderRadius="full"
                width="2rem"
                height="2rem"
                transition="background-color 0.3s"
                _hover={{ cursor: 'pointer' }}
              />
              <Text textAlign="center" mt={2} fontSize="sm" fontWeight="semibold" color={index === currentStep ? 'teal.500': 'gray.300'}>
                {step}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  };
  
  export default ProgressIndicator;