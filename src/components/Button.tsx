"use client";

import { Button } from "@chakra-ui/react";
import Link from 'next/link';

export default function DoubleButton(props: any) {
  return (
    <Link href="/interview">
      <Button colorScheme="teal" size="sm" p="6" hideFrom="lg">
        {props.value}
      </Button>
    </Link>
  );
}
