import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genre = useGenre(useGameQueryStore((s) => s.gameQuery.genreId));
  const platform = usePlatform(
    useGameQueryStore((s) => s.gameQuery.platformId)
  );

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
