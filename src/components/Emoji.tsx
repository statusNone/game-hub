import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image } from '@chakra-ui/react';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating === 3)
    return <Image src={meh} alt="meh" boxSize="25px" marginTop={1}></Image>;
  if (rating === 4)
    return (
      <Image
        src={thumbsUp}
        alt="recommended"
        boxSize="25px"
        marginTop={1}
      ></Image>
    );
  if (rating === 5)
    return (
      <Image
        src={bullsEye}
        alt="exceptional"
        boxSize="35px"
        marginTop={1}
      ></Image>
    );
  return null;
};

export default Emoji;
