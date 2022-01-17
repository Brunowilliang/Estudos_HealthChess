import { ChakraProvider } from '@chakra-ui/react'
import {motion} from 'framer-motion';
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
  return(
    <ChakraProvider theme={theme}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
          pageInitial: {
            opacity: 0,
            backgroundColor: '#F4F7FE',
            transition: {
              ease: "easeInOut",
              duration: 0.8
            }
          },
          pageAnimate: {
            opacity: 1,
            backgroundColor: '#F4F7FE',
            transition: {
              ease: "easeInOut",
              duration: 0.8,
            }
          },
          pageExit: {
            opacity: 0,
            backgroundColor: '#F4F7FE',
            transition: {
              ease: "easeInOut",
              duration: 0.8
            }
          },
        }}>
          <Component {...pageProps} />
        </motion.div>
    </ChakraProvider>
  )
}

export default MyApp
