import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: left;

  /* Add a class for styling */
  &.app-header {
    /* Your specific header styles */
  }

  /* Set a maximum width for the header */
  max-width: 100%; /* You can adjust this value as needed */
`;

const HeaderPage = () => {
  return (
    <HeaderContainer className="app-header">
      <h1>ProTrack</h1>
    </HeaderContainer>
  );
};

export default HeaderPage;
