import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Flex boxShadow="dark-lg" rounded="md" overflow="hidden">
      {children}
    </Flex>
  );
};

export default GameCardContainer;
