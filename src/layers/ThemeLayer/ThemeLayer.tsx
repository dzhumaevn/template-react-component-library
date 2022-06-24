import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { el5Theme } from '../../styles/theme';

const ThemeLayer = ({ children }: any) => (
  <ChakraProvider theme={el5Theme}>{children}</ChakraProvider>
);

export default ThemeLayer;
