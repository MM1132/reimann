import styled from 'styled-components';

export const ReimaButton = styled.button`
  color: #dfdfdf;
  background-color: #6d7572;
  border-radius: 0.25rem;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #008968;
  }
  line-height: 0;

  // Reponsive design
  padding: calc(clamp(0.75rem, 1rem + 0.25vw, 2rem) * 1) calc(clamp(2rem, 2rem + 1vw, 5.3rem) * 1);

  //calc(clamp(2rem, 0.5rem + 3vw, 2.5rem) * 1.4);

  font-size: calc(clamp(0.75rem, 1rem + 0.25vw, 2rem) * 1);
`;
