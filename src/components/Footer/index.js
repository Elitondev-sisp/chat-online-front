import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 1px;
  align-items: center;
  border-radius: 4px; 
  bottom:0;
  margin-bottom:0;
  position: fixed;
  width:100%;
  margin-top:auto;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <p>
        <center>Criado por DevDoFuturo</center>
      </p>
    </FooterWrapper>
  );
}
