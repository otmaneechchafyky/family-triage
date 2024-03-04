import Progress from "../../components/header/Progress";
import Logo from "../../components/header/Logo";
import { Flex } from "@chakra-ui/react";
import SaveStepButton from "../../components/header/SaveStepButton";
import Eligibility from "../../components/main/Eligibility";
import Finance from "../../components/main/Finance";
const Interview = () => {
  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      gap="8"
      bg="gray.100"
      pb={{base: "0", lg: "2.2rem"}}
    >
      <Flex
        width="100%"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "4", lg: "72" }}
        py="4"
        px={{ base: "4", lg: "5%" }}
        bg="white"
      >
        <Flex justifyContent="space-between" alignItems="center" gap={12}>
          <Logo />
          <SaveStepButton />
        </Flex>
        <Progress />
      </Flex>
      <Flex direction="column" alignItems="center" width="100%" bg="gray.100">
        <Eligibility />
        <Finance />
      </Flex>
    </Flex>
  );
};

export default Interview;
