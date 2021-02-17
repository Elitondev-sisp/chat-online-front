import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import ListaCursos from '../src/components/ListaCursos';

const Container = styled.div`
  width: 100%;
  max-width: 90%;
  padding-top: 45px;
  margin: auto;
`;

const Title = styled.div`
  font-size:20px;
  color: ${({ theme }) => theme.colors.main};
  text-align:center;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Lista de Cursos </title>
      </Head>
      <Container>
        <Title>Desenvolvedor do Futuro</Title>
        <Widget>
          <Widget.Header>
            <h1>Lista de Cursos</h1>
          </Widget.Header>
          <Widget.Content>
            Segue uma lista de cursos de programação.
            <ListaCursos />
          </Widget.Content>
        </Widget>
      </Container>
      <Footer />
    </QuizBackground>
  );
}
