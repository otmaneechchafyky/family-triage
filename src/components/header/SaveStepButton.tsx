"use client";

import { Button, useToast } from "@chakra-ui/react";
import { useStore } from '../../stores/stepStore';

export default function SaveStepButton() {
    const saveCurrentStep = useStore((state) => state.saveCurrentStep);
    const toast = useToast()

  const handleSave = () => {
    saveCurrentStep();
    toast({
        title: 'Step saved.',
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top-left',
      })
  };
  return (
    <Button
      onClick={() => handleSave()}
      colorScheme="transparent"
      color="gray.700"
      border="2px"
      borderColor="gray.700"
      p="6"
      hideFrom="lg"
    >
      Save and finish later
    </Button>
  );
}
