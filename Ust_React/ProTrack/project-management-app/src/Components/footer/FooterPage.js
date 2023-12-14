import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterPage = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Project Management App</p>
    </FooterContainer>
  );
};

export default FooterPage;
