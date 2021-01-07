import * as React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  background-color: green;
  color: red;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <AlertContainer>
      {message}
    </AlertContainer>
  )
};

export default Alert;
