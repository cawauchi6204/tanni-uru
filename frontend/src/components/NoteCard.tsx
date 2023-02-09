import {
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = Required<{
  noteName: string;
  src: string;
  price: number;
  bodyText: string;
  sellerName: string;
}>;

const NoteCard: React.FC<Props> = ({
  noteName,
  src,
  price,
  bodyText,
  sellerName,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={src} alt="note image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{noteName}</Heading>
          <Text color="red.300" fontSize="2xl">
            {price}円
          </Text>
          <Text>{bodyText}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <VStack mt={5}>
        <Center>
          <Button variant="solid" colorScheme="blue">
            購入する
          </Button>
          <Button variant="ghost" colorScheme="blue">
            カートに入れる
          </Button>
        </Center>
        <Text color={"blackAlpha.700"}>投稿者: {sellerName}</Text>
      </VStack>
    </Card>
  );
};

export default NoteCard;
