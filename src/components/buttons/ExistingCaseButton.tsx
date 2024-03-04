"use client";

import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function ExistingCaseButton() {
  return (
    <Link href="/interview">
      <Button colorScheme="teal" size="sm" p="6" hideFrom="lg">
        Respond to an existing case
      </Button>
    </Link>
  );
}
