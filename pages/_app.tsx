import type { AppProps } from 'next/app'
import { ChakraProvider, Container, VStack, Image, Text, Heading, Box, Divider } from '@chakra-ui/react'
import theme from '../theme';


const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
      <Container 
     backgroundColor='white'
     borderRadius='sm'
     boxShadow='md'
     maxWidth='container.xl'
     padding={4}
     >
      <VStack marginBottom={6}>
        <Image borderRadius={9999} src='//place-hold.it/128x128' />
        <Heading>Le Perfume</Heading>
        <Text>Tienda de perfumes</Text>
      </VStack>
      <Divider marginY={6}/>
     <Component {...pageProps} />
     </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
