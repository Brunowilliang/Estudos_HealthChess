import { useState } from 'react';
import Head from 'next/head'
import { Container, Box, HStack, Input, Text, Button, VStack, Center } from '@chakra-ui/react'

export default function Home() {

  const [input, setInput] = useState('');
  const [pesquisar, setPesquisar] = useState('');
  const [times, setTimes] = useState([
    {
      id: 0,
      nome: 'Corinthians',
    },
    {
      id: 1,
      nome: 'São Paulo',
    },
    {
      id: 2,
      nome: 'Palmeiras',
    },
    {
      id: 3,
      nome: 'Santos',
    },
  ])


  const adicionarTime = () => {
    if (input === '') {
      setTimes([...times,])
    }else {
      setTimes([...times, { id: times.length, nome: input }]);
      setInput('');
      setPesquisar('');
    }
  }

  const deletarTime = (id) => {
    setTimes(times.filter(time => time.id !== id))
  }


  return (
    <div>
      <Head>
        <title>Estudos | HealthChess</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW='600px' pt="80px" centerContent>
        <Input borderColor="gray200" h="50px" placeholder='Pesquisar time' value={pesquisar} onChange={ (e) => setPesquisar(e.currentTarget.value)}/>
        <HStack w="100%" mt="30px" spacing="10px" justify="space-between" align="center">
          <Input borderColor="gray200" h="50px" placeholder='Adicionar time' value={input} onChange={ (e) => setInput(e.currentTarget.value)}/>
          <Button onClick={adicionarTime} px='30px' h="50px" bgColor="gray200" color="gray500">Adicionar</Button>
        </HStack>
          {times.filter((t) => {
            if (pesquisar == '') {
              return t;
            } else if(t.nome.toLowerCase().includes(pesquisar.toLowerCase())) {
              return t;
            }
            }).map (time => (
            <Box
              key={time.id}
              mt="20px"
              w="100%"
              h="60px"
              bg="white"
              boxShadow='sm'
              borderRadius="10px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="20px"
            >
              <Text>{time.nome}</Text>
              <HStack>
                <Button onClick={() => {}}>editar</Button>
                <Button onClick={() => deletarTime(time.id)}>Deletar</Button>
              </HStack>
            </Box>
            ))
          }

        <HStack spacing="5px" mt="20px" w="100%" h="50px">
          <Text>Existem um total de</Text>
          <Text fontWeight="bold">{times.length}</Text>
          <Text>times.</Text>
        </HStack>

      </Container>


    </div>
  )
}

