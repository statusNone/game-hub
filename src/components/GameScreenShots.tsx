import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenShots from '../hooks/useScreenShots';

interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const screenShots = data?.results;
  return screenShots ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenShots.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} alt="" />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenShots;
