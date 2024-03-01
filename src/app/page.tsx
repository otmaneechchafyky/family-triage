import Logo from "../components/Logo";
import DoubleButton from "../components/Button";
import { Button } from "@chakra-ui/react";
import Request from "../components/Request";
import ChatBotButton from "../components/ChatBotButton";
import { Flex, Text, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      gap="5"
      bg="gray.100"
    >
      <Flex width="100%" justifyContent={{base: "center", lg: "start"}} py="4" px={{base: "4", lg:"5%"}} bg="white">
        <Logo />
      </Flex>
      <Flex
        width="90%"
        direction={{base: "column", lg: "row"}}
        alignItems={{base: "start", lg: "center"}}
        // justifyContent={{lg: "space-around"}}
        gap={{base: "8", lg: "24"}}
        pt="10"
        pb={{lg: "10"}}
        // py={{lg: "2rem"}}
        mb={{lg: "1.5rem"}}
        px={{base: "5", lg: "5rem"}}
        bg="white"
        color="blue.800"
        rounded="5"
      >
        <Flex flex={{lg: "1"}} direction="column" gap="4" alignItems="start">
          <Text fontSize="4xl" fontWeight="bold" lineHeight="125%">
            Your path to Resolution
          </Text>
          <Text fontSize="1xl">
            Sunt quis voluptate velit eu enim in exercitation ea aliqua. In
            tempor est tempor ea culpa excepteur. Non dolore consectetur aliquip
            esse. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            atque molestiae laborum voluptatibus voluptates? Numquam, architecto
            unde fuga, quae temporibus nobis aliquam autem tempore sunt mollitia
            distinctio quasi exercitationem illum.
          </Text>
          <DoubleButton value="Initiate a new case" />
          <DoubleButton value="Respond to an existing case" />
          <Button colorScheme="teal" size="sm" p="6" hideBelow='lg'>Start</Button>
        </Flex>
        <Flex flex={{lg: "1"}} direction="column" gap="4" p="4" bg="yellow.50" borderWidth="3px" borderColor="yellow.300" rounded="10px">
          <Request
            title="First name"
            content="Et culpa consequat sunt dolor non dolore dolore culpa aute est fugiat ullamco. Nostrud aliquip id fugiat do. Eiusmod cillum quis deserunt exercitation ullamco sunt labore nisi magna exercitation ut."
          />
          <Box height="3px" width="100%" bg="gray.600" rounded="10px" hideBelow='md'/>
          <Request
            title="Second name"
            content="Commodo fugiat sit laboris in id cillum non. Aliqua occaecat ut nisi incididunt duis nostrud et do velit duis excepteur do commodo."
          />
          <Box height="3px" width="100%" bg="gray.600" rounded="10px"/>
          <Request
            title="Third name"
            content="Ad labore esse culpa aliquip fugiat sit anim voluptate ad minim cupidatat. Ea eu fugiat."
          />
        </Flex>
        <ChatBotButton value="ChatBot"/>
      </Flex>
    </Flex>
  );
}
