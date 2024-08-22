import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
`;

const ProgressBarFiller = styled.div`
  width: ${({ progress }) => progress}%;
  height: 10px;
  background-color: #4caf50;
  border-radius: 5px;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFiller progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
