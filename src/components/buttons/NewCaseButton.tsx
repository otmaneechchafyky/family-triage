"use client";

import { Button } from "@chakra-ui/react";
import { useStore } from "../../stores/stepStore";
import { useRouter } from "next/navigation";

export default function NewCaseButton() {
  const router = useRouter();
  const resetStep = useStore((state) => state.resetStep);

  const handleSavedStep = () => {
    resetStep();
    router.push("/interview");
  };
  return (
    <Button
      onClick={() => handleSavedStep()}
      colorScheme="teal"
      size="sm"
      p="6"
      hideFrom="lg"
    >
      Initiate a new case
    </Button>
  );
}
