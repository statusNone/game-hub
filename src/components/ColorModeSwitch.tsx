import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const modeIcons = {
    dark: MdDarkMode,
    light: MdLightMode,
  };
  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Icon
        as={colorMode === 'dark' ? modeIcons.dark : modeIcons.light}
        boxSize={'30px'}
      ></Icon>
    </HStack>
  );
};

export default ColorModeSwitch;
