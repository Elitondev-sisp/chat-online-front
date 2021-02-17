import styled from 'styled-components';

// src/components/Footer/index.js
const Curso = styled.footer`
  background-color: #00000070;
  width: 300px;
  height: 300px;
  margin: 5px;
`;

Curso.Header = styled.header `

`;
Curso.Footer = styled.div `
  bottom:0;
  margin-bottom:0;
  position: absolute;
`;

const Cursos = styled.div`
    width:100%;
    display: inline-flex;
    margin-top:10px;
    margin-bottom:10px;
    padding-top:10px;
`;

export default function ListaCursos(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Cursos>
        <Curso>
            <Curso.Footer>Curso 1</Curso.Footer>
        </Curso>
        <Curso>
            <Curso.Footer>Curso 2</Curso.Footer>
        </Curso>
        <Curso>
            <Curso.Footer>Curso 3</Curso.Footer>
        </Curso>
    </Cursos>
    // <FooterWrapper {...props}>
    //   <p>
    //     <center>Criado por DevDoFuturo</center>
    //   </p>
    // </FooterWrapper>
  );
}
